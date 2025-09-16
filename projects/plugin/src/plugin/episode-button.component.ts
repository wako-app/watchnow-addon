import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show } from '@wako-app/mobile-sdk';
import { OpenButtonComponent } from './open-button.component';

@Component({
  imports: [OpenButtonComponent],
  template: `<wk-open-button [show]="show" [episode]="episode"></wk-open-button>`,
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent {
  show: Show;
  episode: Episode;

  setShowEpisode(show: Show, episode: Episode): any {
    this.show = show;
    this.episode = episode;
  }
}
