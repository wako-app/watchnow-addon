import { Injectable } from '@angular/core';
import { Episode, Movie, Show, WakoHttpRequestService } from '@wako-app/mobile-sdk';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

export interface Source {
  id: string;
  name: string;
  url: string;
  country: string;
  logoUrl: string;
  intentUrl?: string;
}

@Injectable()
export class WatchnowService {
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

  private getNetflixUrl(source: Source) {
    return WakoHttpRequestService.request<string>(
      {
        url: source.url,
        method: 'GET',
        responseType: 'text',
        headers: {
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none',
          'Sec-Fetch-User': '?1',
        },
      },
      '3d',
    ).pipe(
      catchError((err) => {
        if (err.status === 302) {
          return of(err.response);
        }
        return throwError(err);
      }),
      map((html) => {
        if (html.match('Found') && html.match(/href="([^"]*)/) !== null) {
          const matches = html.match(/href="([^"]*)/);
          if (matches[1]) {
            return matches[1];
          }
        }
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const node = doc.querySelector<HTMLMetaElement>('meta[property="al:ios:url"]');

        if (node && node.getAttribute('content')) {
          const id = node.getAttribute('content').split('/').pop().split('?').shift();

          return `http://www.netflix.com/watch/${id}`;
        }
        return source.url;
      }),
    );
  }

  private setKnownPlatformUrl(sources: Source[]) {
    const obss: Observable<Source>[] = [];

    sources.forEach((source) => {
      if (source.id === 'netflix') {
        obss.push(
          this.getNetflixUrl(source).pipe(
            catchError((err) => {
              console.error(err);
              return of(source.url);
            }),
            map((netflixUrl) => {
              source.url = netflixUrl;
              return source;
            }),
          ),
        );
      } else {
        obss.push(of(source));
      }
    });

    return forkJoin(obss);
  }

  getSources(options: { movie?: Movie; show?: Show; episode?: Episode }) {
    let url = null;
    if (options.movie) {
      url = `/movies/${options.movie.ids.trakt}`;
    } else if (options.show && options.episode) {
      url = `/shows/${options.show.ids.trakt}/seasons/${options.episode.seasonNumber}/episodes/${options.episode.number}`;
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
              const logoUrl = 'https://trakt.tv' + img;

              sources.push({
                id: dataSource,
                name,
                country,
                url,
                logoUrl,
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
      // switchMap((sources) => {
      //   return this.setKnownPlatformUrl(sources);
      // }),
    );
  }
}
