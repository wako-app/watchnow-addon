import { Component } from '@angular/core';
import { Show, ShowDetailBaseComponent } from '@wako-app/mobile-sdk';
import { OpenButtonComponent } from './open-button.component';

@Component({
  standalone: true,
  imports: [OpenButtonComponent],
  template: `<wk-open-button [show]="show"></wk-open-button>`,
})
export class ShowButtonComponent extends ShowDetailBaseComponent {
  show: Show;

  setShow(show: Show): any {
    this.show = show;
  }
}
