import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { IONIC_COMPONENTS } from './shared/shared-component';
import { addIcons } from 'ionicons';
import * as ionIcons from 'ionicons/icons';
import { DeviceInfoService } from './service/device-info/device-info.service';
import * as customIcon from 'src/assets/icon/custom-icon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, ...IONIC_COMPONENTS],
})
export class AppComponent {
  constructor(private deviceInfoService: DeviceInfoService) {
    const agentIcon = addIcons({
      ...ionIcons,
      'agent-icon': customIcon.agentIcon,
    });
    this.initializeApp();
  }

  private initializeApp() {
    this.deviceInfoService.setDeviceInfo();
  }
}
