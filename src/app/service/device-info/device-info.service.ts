import { Injectable, signal, WritableSignal } from '@angular/core';
import { Device, DevicePlugin } from '@capacitor/device';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DeviceInfoService {
  public osVersion: WritableSignal<string> = signal('');
  public deviceId: WritableSignal<string> = signal('');

  public async setDeviceInfo() {
    const deviceInfo = await Device.getInfo();
    const deviceId = await Device.getId();
    this.osVersion.set(deviceInfo.osVersion);
    this.deviceId.set(deviceId.identifier);
  }
}
