import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PluginBaseModule, WakoProviders } from '@wako-app/mobile-sdk';
import { EpisodeButtonComponent } from './episode-button.component';
import { MovieButtonComponent } from './movie-button.component';
import { OpenButtonComponent } from './open-button.component';
import { PluginService } from './services/plugin.service';
import { WatchnowService } from './services/watchnow.service';
import { ShowButtonComponent } from './show-button.component';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { IonicStorageModule } from '@ionic/storage-angular';

const components = [MovieButtonComponent, EpisodeButtonComponent, ShowButtonComponent, OpenButtonComponent];

@NgModule({
  imports: [CommonModule, FormsModule, TranslateModule.forRoot(), IonicStorageModule.forRoot({}), ...components],
  providers: [
    PluginService,
    WatchnowService,
    ...WakoProviders,
    provideIonicAngular({
      swipeBackEnabled: true,
      backButtonText: '',
      mode: 'md',
    }),
  ], // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static override pluginService = PluginService;
  static override movieComponent = MovieButtonComponent;
  static override episodeComponent = EpisodeButtonComponent;
  static override showComponent = ShowButtonComponent;
}
