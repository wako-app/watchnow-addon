import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { film, tv, settings } from 'ionicons/icons';
import { IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon],
})
export class TabsPage {
  constructor() {
    addIcons({ film, tv, settings });
  }
}
