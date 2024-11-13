import { Component, Input, OnInit } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { Source, WatchnowService } from './services/watchnow.service';
import { finalize } from 'rxjs/operators';
import { logEvent } from './services/tools';
import { TranslateModule } from '@ngx-translate/core';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { IonSpinner, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'wk-open-button',
  styles: `
    .container {
      .button {
        &.netflix {
          --background: #e50914;
        }

        &.apple_itunes {
          --background: #999;
        }

        &.google_play_movies {
          --background: #607d8b;
        }
      }
    }
  `,
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, TranslateModule, IonSpinner, IonText, IonButton],
  template: `
    <div class="container">
      <ion-spinner *ngIf="loading"></ion-spinner>
      <ion-text *ngIf="!loading && sources.length === 0">{{ 'noSourceFound' | translate }}</ion-text>
      <ion-button *ngFor="let source of sources" expand="block" class="{{ source.id }}" (click)="goTo(source)">
        {{ source.name | titlecase }}
      </ion-button>
    </div>
  `,
})
export class OpenButtonComponent implements OnInit {
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' = 'button';

  sources: Source[] = [];
  loading = true;

  constructor(private watchnowService: WatchnowService) {}

  ngOnInit(): void {
    this.watchnowService
      .getSources({
        movie: this.movie,
        show: this.show,
        episode: this.episode,
      })
      .pipe(finalize(() => (this.loading = false)))
      .subscribe((sources) => {
        this.sources = sources;
      });
  }

  goTo(source: Source) {
    logEvent('addon_watchnow', { type: this.type, source: source.id });
    BrowserService.open(source.url, false);
  }
}
