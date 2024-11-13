import { Component } from '@angular/core';
import { Episode, EpisodeDetailBaseComponent, Show } from '@wako-app/mobile-sdk';
import { OpenButtonComponent } from './open-button.component';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  imports: [OpenButtonComponent, NgFor],
  template: ` <ng-container *ngFor="let time of times">
    <wk-open-button [show]="show" [episode]="episode"></wk-open-button>
  </ng-container>`,
})
export class EpisodeButtonComponent extends EpisodeDetailBaseComponent {
  show: Show;
  episode: Episode;

  times = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  setShowEpisode(show: Show, episode: Episode): any {
    this.show = show;
    this.episode = episode;
  }
}
