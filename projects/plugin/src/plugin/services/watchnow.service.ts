import { Injectable } from '@angular/core';
import { Episode, Movie, Show, WakoHttpRequestService } from '@wako-app/mobile-sdk';
import { map } from 'rxjs/operators';

export interface Source {
  id: string;
  name: string;
  url: string;
  country: string;
  logoUrl: string;
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
        return id.replace(/_/ig, ' ');
    }
  }

  getSources(options: { movie?: Movie; show?: Show; episode?: Episode }) {
    let url = null;
    if (options.movie) {
      url = `/movies/${options.movie.traktId}`;
    } else if (options.show && options.episode) {
      url = `/shows/${options.show.traktId}/seasons/${options.episode.traktSeasonNumber}/episodes/${options.episode.traktNumber}`;
    }

    return WakoHttpRequestService.get<string>('https://trakt.tv' + url, null, '3d').pipe(
      map(html => {
        const sources: Source[] = [];
        try {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const nodes = doc.querySelectorAll<HTMLAnchorElement>('.sources a');

          nodes.forEach(node => {
            sources.push({
              id: node.getAttribute('data-source').trim(),
              name: this.getNameFromId(node.getAttribute('data-source').trim()),
              country: node.getAttribute('data-country').trim(),
              url: 'https://trakt.tv' + node.getAttribute('link').trim(),
              logoUrl: 'https://trakt.tv' + node.querySelector<HTMLImageElement>('img').getAttribute('data-original')
            });
          });
        } catch (e) {
        }

        return sources;
      })
    );
  }
}
