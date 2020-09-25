import { Injectable } from '@angular/core';
import {
  PluginBaseService,
  Episode,
  ExplorerFile,
  ExplorerFolderItem,
  KodiOpenParams,
  Movie,
  OpenMedia,
  Show,
  WakoFileActionButton
} from '@wako-app/mobile-sdk';
import { TranslateService } from '@ngx-translate/core';
import { logData } from './tools';

@Injectable()
export class PluginService extends PluginBaseService {
  constructor(protected translate: TranslateService) {
    super();
  }

  initialize() {
    logData('plugin initialized');
  }

  afterInstall(): any {
    logData('plugin installed');
  }

  afterUpdate(): any {
    logData('plugin updated');
  }

  setTranslation(lang: string, translations: any): any {
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);
    this.translate.setTranslation(lang, translations);
  }

  customAction(action: string, data: any): any {}

  beforeMovieMiddleware(movie: Movie): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  afterMovieMiddleware(movie: Movie): Promise<Movie> {
    throw new Error('Method not implemented.');
  }

  beforeShowMiddleware(show: Show): Promise<Show> {
    throw new Error('Method not implemented.');
  }

  afterShowMiddleware(show: Show): Promise<Show> {
    throw new Error('Method not implemented.');
  }

  beforeEpisodeMiddleware(show: Show, episode: Episode): Promise<Episode> {
    throw new Error('Method not implemented.');
  }

  afterEpisodeMiddleware(show: Show, episode: Episode): Promise<Episode> {
    throw new Error('Method not implemented.');
  }

  fetchExplorerFolderItem(): Promise<ExplorerFolderItem[]> {
    throw new Error('Method not implemented.');
  }

  async getFileActionButtons(
    file: ExplorerFile,
    title?: string,
    posterUrl?: string,
    seekTo?: number,
    openMedia?: OpenMedia,
    kodiOpenParams?: KodiOpenParams
  ): Promise<WakoFileActionButton[]> {
    throw new Error('Method not implemented.');
  }
}
