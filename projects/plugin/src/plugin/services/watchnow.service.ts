import { inject, Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Episode, Movie, Show, WakoGlobal, WakoHttpRequestService } from '@wako-app/mobile-sdk';
import { catchError, firstValueFrom, forkJoin, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Source {
  id: string;
  name: string;
  url: string;
  country: string;
  logoUrl?: string;
  intentUrl?: string;
  platform?: 'netflix' | 'prime' | 'disney' | 'hulu' | 'hbo' | 'watchhub';
}

interface WatchhubStream {
  name: string;
  title?: string;
  externalUrl: string;
  androidTvUrl?: string;
  tizenUrl?: string;
  webosUrl?: string;
  iosUrl?: string;
  tvOsUrl?: string;
  fireTvUrl?: string;
}

interface WatchhubResponse {
  streams: WatchhubStream[];
}

/**
 * Service to fetch streaming sources from both Watchhub and Trakt
 * Handles platform-specific URLs and source normalization
 */
@Injectable()
export class WatchnowService {
  private platform = inject(Platform);

  /**
   * Get current platform (ios, android, or androidTv)
   */
  private getPlatform() {
    if (WakoGlobal && WakoGlobal.isTvLayout) {
      return 'androidTv';
    }

    return this.platform.is('ios') ? 'ios' : 'android';
  }

  /**
   * Normalize source names for display
   */
  private getNameFromId(id: string) {
    switch (id) {
      case 'apple_itunes':
        return 'Itunes';
      case 'google_play_movies':
        return 'Google Play';
      case 'netflix':
        return 'Netflix';
      default:
        return id.replace(/_/gi, ' ');
    }
  }

  /**
   * Get streaming sources from both Watchhub and Trakt
   * Prioritizes Watchhub sources over Trakt sources
   */
  getSources(options: { movie?: Movie; show?: Show; episode?: Episode }) {
    return forkJoin([this.getSourcesFromWatchhub(options), this.getSourcesFromTrakt(options)]).pipe(
      map(([watchhubSources, traktSources]) => {
        // Map of equivalent source IDs
        const equivalentIds: { [key: string]: string } = {
          amazon_video: 'prime',
          amazon_prime: 'prime',
          disney_plus: 'disney',
          disney: 'disney',
        };

        // Use Map to avoid duplicates based on source ID
        const sourceMap = new Map<string, Source>();
        const usedUrls = new Set<string>();

        // Add Watchhub sources first (higher priority)
        watchhubSources.forEach((source) => {
          if (source.id) {
            // Normalize the source ID
            const normalizedId = equivalentIds[source.id] || source.id;
            sourceMap.set(normalizedId, source);
            usedUrls.add(source.url);
          }
        });

        // Add Trakt sources only if they don't already exist and URL is unique
        traktSources.forEach((source) => {
          if (!source.id || usedUrls.has(source.url)) {
            return;
          }

          // Normalize the source ID
          const normalizedId = equivalentIds[source.id] || source.id;

          // Skip if we already have this source (after normalization)
          if (sourceMap.has(normalizedId)) {
            return;
          }

          sourceMap.set(normalizedId, source);
          usedUrls.add(source.url);
        });

        return Array.from(sourceMap.values());
      }),
    );
  }

  /**
   * Map source IDs to platform types for consistent identification
   */
  private getSourcePlatform(sourceId: string): Source['platform'] | undefined {
    const platformMap: { [key: string]: Source['platform'] } = {
      netflix: 'netflix',
      prime: 'prime',
      amazon_prime: 'prime',
      disney: 'disney',
      disney_plus: 'disney',
      hulu: 'hulu',
      hbo: 'hbo',
      hbo_max: 'hbo',
      hbo_go: 'hbo',
      watchhub: 'watchhub',
    };

    return platformMap[sourceId.toLowerCase()];
  }

  /**
   * Get the appropriate URL based on the current platform
   * Handles different URL types for iOS, Android TV, and regular Android
   */
  private getPlatformSpecificUrl(stream: WatchhubStream): string {
    const platform = this.getPlatform();

    switch (platform) {
      case 'ios':
        return stream.iosUrl || stream.externalUrl;
      case 'androidTv':
        return stream.androidTvUrl || stream.externalUrl;
      case 'android':
        return stream.externalUrl;
      default:
        return stream.externalUrl;
    }
  }

  /**
   * Fetch streams from Watchhub API
   * Handles both movies and TV shows with proper ID formatting
   */
  private async getWatchhubStreams(options: { imdbId: string; seasonNumber?: number; episodeNumber?: number }) {
    try {
      const type = options.seasonNumber !== undefined ? 'series' : 'movie';
      let streamId = options.imdbId;

      if (type === 'series' && options.seasonNumber !== undefined && options.episodeNumber !== undefined) {
        streamId = `${options.imdbId}:${options.seasonNumber}:${options.episodeNumber}`;
      }

      const response = await firstValueFrom(
        WakoHttpRequestService.get<WatchhubResponse>(`https://watchhub.strem.io/stream/${type}/${streamId}.json`),
      );

      if (!response?.streams?.length) {
        return [];
      }

      const platform = this.getPlatform();

      return response.streams.map((stream): Source => {
        const platformUrl = this.getPlatformSpecificUrl(stream);
        const sourceId = this.getSourceIdFromName(stream.name);

        const source: Source = {
          id: sourceId,
          name: stream.name,
          url: platformUrl,
          country: 'all',
          logoUrl: this.getSourceLogo(sourceId),
          platform: this.getSourcePlatform(sourceId),
        };

        if (platform === 'androidTv') {
          source.intentUrl = platformUrl;
        }

        return source;
      });
    } catch (error) {
      console.error('Error fetching Watchhub streams:', error);
      return [];
    }
  }

  /**
   * Get platform-specific logos for known streaming services
   * Returns undefined for unknown sources
   */
  private getSourceLogo(sourceId: string): string | undefined {
    const logoMap: { [key: string]: string } = {
      netflix: 'https://www.netflix.com/favicon.ico',
      prime: 'https://www.primevideo.com/favicon.ico',
      disney: 'https://www.disneyplus.com/favicon.ico',
      hulu: 'https://www.hulu.com/favicon.ico',
      hbo: 'https://www.hbomax.com/favicon.ico',
      apple_itunes: 'https://www.apple.com/favicon.ico',
      google_play_movies: 'https://play.google.com/favicon.ico',
      amazon_video: 'https://www.amazon.com/favicon.ico',
    };

    return logoMap[sourceId.toLowerCase()] || undefined;
  }

  /**
   * Get sources from Watchhub using IMDB IDs
   * Handles both movies and TV shows
   * Returns empty array if required IDs are missing
   */
  private getSourcesFromWatchhub(options: { movie?: Movie; show?: Show; episode?: Episode }) {
    // Check for required IMDB ID
    const imdbId = options.movie?.ids?.imdb || options.show?.ids?.imdb;
    if (!imdbId) {
      return of([]);
    }

    // For TV episodes, check for required episode data
    if (options.show && options.episode) {
      if (typeof options.episode.seasonNumber !== 'number' || typeof options.episode.number !== 'number') {
        return of([]);
      }
    }

    const watchhubOptions = {
      imdbId,
      seasonNumber: options.episode?.seasonNumber,
      episodeNumber: options.episode?.number,
    };

    return from(this.getWatchhubStreams(watchhubOptions));
  }

  /**
   * Scrape sources from Trakt.tv website
   * Extracts streaming links and their metadata
   * Returns empty array if required IDs are missing or on error
   */
  private getSourcesFromTrakt(options: { movie?: Movie; show?: Show; episode?: Episode }) {
    let url: string | null = null;

    // Check for required Trakt IDs and build URL
    if (options.movie) {
      if (!options.movie.ids?.trakt) {
        return of([]);
      }
      url = `/movies/${options.movie.ids.trakt}`;
    } else if (options.show && options.episode) {
      if (
        !options.show.ids?.trakt ||
        typeof options.episode.seasonNumber !== 'number' ||
        typeof options.episode.number !== 'number'
      ) {
        return of([]);
      }
      url = `/shows/${options.show.ids.trakt}/seasons/${options.episode.seasonNumber}/episodes/${options.episode.number}`;
    }

    // If no valid URL could be constructed, return empty array
    if (!url) {
      return of([]);
    }

    return WakoHttpRequestService.get<string>('https://trakt.tv' + url, null, '3d').pipe(
      map((html) => {
        const sources: Source[] = [];
        try {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const nodes = doc.querySelectorAll<HTMLAnchorElement>('.streaming-links .sources a');

          nodes.forEach((node) => {
            try {
              let dataSource = node.getAttribute('data-source')?.trim();
              const country = node.getAttribute('data-country')?.trim();
              const href = node.getAttribute('href')?.trim();
              if (href === '#') {
                return;
              }
              const img = node.querySelector<HTMLImageElement>('img')?.getAttribute('data-original');

              if (!dataSource && href.match('/watchnow')) {
                dataSource = href.split('/').pop();
              }

              const name = dataSource ? this.getNameFromId(dataSource) : 'N/A';
              const url = 'https://trakt.tv' + href;
              // const logoUrl = 'https://trakt.tv' + img;

              sources.push({
                id: dataSource,
                name,
                country,
                url,
                logoUrl: this.getSourceLogo(dataSource),
                platform: dataSource ? this.getSourcePlatform(dataSource) : undefined,
              });
            } catch (e) {
              console.error(e);
            }
          });
        } catch (e) {
          console.error(e);
        }

        return sources;
      }),
      catchError((error) => {
        console.error('Error fetching Trakt sources:', error);
        return of([]);
      }),
    );
  }

  /**
   * Normalize source names from Watchhub to match internal IDs
   * Maps service names to consistent identifiers
   */
  private getSourceIdFromName(name: string): string {
    const normalizedName = name.toLowerCase().replace(/\s+/g, '_');
    switch (normalizedName) {
      case 'disney_plus':
        return 'disney';
      case 'amazon_prime':
        return 'prime';
      default:
        return normalizedName;
    }
  }
}
