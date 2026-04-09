import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IONIC_COMPONENTS } from './shared/shared-component';
import { addIcons } from 'ionicons';
import * as ionIcons from 'ionicons/icons';
import { DeviceInfoService } from './service/device-info/device-info.service';
import { provideHttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, ...IONIC_COMPONENTS],
})
export class AppComponent {
  constructor(private deviceInfoService: DeviceInfoService) {
    addIcons(ionIcons);
    this.initializeApp();
  }

  private initializeApp() {
    this.deviceInfoService.setDeviceInfo();
  }
}
