import { Component, Input, OnInit } from '@angular/core';
import { BrowserService, Episode, Movie, Show } from '@wako-app/mobile-sdk';
import { Source, WatchnowService } from '../services/watchnow.service';
import { finalize } from 'rxjs/operators';
import { logEvent } from '../services/tools';

@Component({
  selector: 'wk-open-button',
  templateUrl: './open-button.component.html',
  styleUrls: ['./open-button.component.scss']
})
export class OpenButtonComponent implements OnInit {
  @Input() movie: Movie;
  @Input() show: Show;
  @Input() episode: Episode;
  @Input() type: 'button' = 'button';

  sources: Source[] = [];
  loading = true;

  constructor(private browserService: BrowserService, private watchnowService: WatchnowService) {

  }

  ngOnInit(): void {
    this.watchnowService.getSources({
      movie: this.movie,
      show: this.show,
      episode: this.episode
    })
      .pipe(finalize(() => this.loading = false))
      .subscribe(sources => {
        this.sources = sources;
        console.log({ sources });
      });
  }


  goTo(source: Source) {
    logEvent('addon_watchnow', { type: this.type, source: source.id });
    this.browserService.open(source.url, false);
  }
}
