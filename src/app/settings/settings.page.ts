import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AddonSettingsComponent } from './addon-settings/addon-settings.component';
import { ModalController } from '@ionic/angular/standalone';
import { PluginLoaderService } from '../services/plugin-loader.service';
import { RouterLink } from '@angular/router';
import {
  IonRouterLink,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab2',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [RouterLink, IonRouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel],
})
export class SettingsPage implements OnInit {
  @ViewChild('settingsRef', { read: ViewContainerRef, static: true })
  settingsRef: ViewContainerRef;

  constructor(
    private pluginLoader: PluginLoaderService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {}

  async addonSettings() {
    const modal = await this.modalCtrl.create({
      component: AddonSettingsComponent,
    });

    modal.present();
  }
}
