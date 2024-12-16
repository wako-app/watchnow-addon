import { Component, Input, OnInit } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { Source, WatchnowService } from './services/watchnow.service';
import { finalize } from 'rxjs/operators';
import { logEvent } from './services/tools';
import { TranslateModule } from '@ngx-translate/core';
import { TitleCasePipe } from '@angular/common';
import { IonSpinner, IonText, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'wk-open-button',
  styles: `
    .container {
      .loading-container {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 48px;
      }

      .button {
        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }

        &.netflix {
          --ion-color-primary: #e50914;
          --ion-color-primary-contrast: #ffffff;
        }

        &.prime {
          --ion-color-primary: #00a8e1;
          --ion-color-primary-contrast: #ffffff;
        }

        &.disney {
          --ion-color-primary: #0063e5;
          --ion-color-primary-contrast: #ffffff;
        }

        &.hulu {
          --ion-color-primary: #1ce783;
          --ion-color-primary-contrast: #000000;
        }

        &.hbo {
          --ion-color-primary: #8f00ff;
          --ion-color-primary-contrast: #ffffff;
        }

        &.apple_itunes {
          --ion-color-primary: #000000;
          --ion-color-primary-contrast: #ffffff;
        }

        &.google_play_movies {
          --ion-color-primary: #01875f;
          --ion-color-primary-contrast: #ffffff;
        }
      }
    }

    .button-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
    }

    .source-logo {
      width: 20px;
      height: 20px;
      object-fit: contain;
    }
  `,
  standalone: true,
  imports: [TitleCasePipe, TranslateModule, IonSpinner, IonText, IonButton],
  template: `
    <div class="container">
      @if (loading) {
        <div class="loading-container">
          <ion-spinner></ion-spinner>
        </div>
      } @else {
        @if (!sources.length) {
          <ion-text>{{ 'noSourceFound' | translate }}</ion-text>
        } @else {
          @for (source of sources; track source.id) {
            <ion-button expand="block" fill="outline" [class]="source.id" [color]="'primary'" (click)="goTo(source)">
              <div class="button-content">
                @if (source.logoUrl) {
                  <img [src]="source.logoUrl" [alt]="source.name" class="source-logo" />
                }
                <span>{{ source.name | titlecase }}</span>
              </div>
            </ion-button>
          }
        }
      }
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
    const url = source.url.startsWith('intent://') ? source.intentUrl || source.url : source.url;
    BrowserService.open(url, false);
  }
}
