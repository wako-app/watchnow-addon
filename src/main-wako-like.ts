import { enableProdMode, importProvidersFrom } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { IonicStorageModule } from '@ionic/storage-angular';
import { TranslateModule } from '@ngx-translate/core';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { WakoProviders } from '@wako-app/mobile-sdk';
import { IonicRouteStrategy } from '@ionic/angular/standalone';
import { RouteReuseStrategy } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      IonicModule.forRoot({
        swipeBackEnabled: true,
        backButtonText: '',
        mode: 'md',
      }),
      AppRoutingModule,
      TranslateModule.forRoot(),
      IonicStorageModule.forRoot({
        name: 'wako',
      }),
    ),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ...WakoProviders,
  ],
}).catch((err) => console.error(err));
