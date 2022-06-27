import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { PluginBaseModule } from '@wako-app/mobile-sdk';
import { EpisodeButtonComponent } from './episode-button/episode-button.component';
import { MovieButtonComponent } from './movie-button/movie-button.component';
import { OpenButtonComponent } from './open-button/open-button.component';
import { PluginService } from './services/plugin.service';
import { WatchnowService } from './services/watchnow.service';
import { ShowButtonComponent } from './show-button/show-button.component';

const components = [MovieButtonComponent, EpisodeButtonComponent, ShowButtonComponent, OpenButtonComponent];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule.forRoot(), TranslateModule.forRoot()],
  declarations: [...components],
  entryComponents: [...components],
  providers: [PluginService, WatchnowService], // Add your services here. Do not use provideIn: 'root' in your services
})
export class PluginModule extends PluginBaseModule {
  static override pluginService = PluginService;
  static override movieComponent = MovieButtonComponent;
  static override episodeComponent = EpisodeButtonComponent;
  static override showComponent = ShowButtonComponent;
}
