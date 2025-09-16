import { Component } from '@angular/core';
import { Movie, MovieDetailBaseComponent } from '@wako-app/mobile-sdk';
import { OpenButtonComponent } from './open-button.component';

@Component({
  imports: [OpenButtonComponent],
  template: `<wk-open-button [movie]="movie"></wk-open-button>`,
})
export class MovieButtonComponent extends MovieDetailBaseComponent {
  movie: Movie;

  setMovie(movie: Movie): any {
    this.movie = movie;
  }
}
