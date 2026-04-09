import { Injectable, signal, WritableSignal } from '@angular/core';
import { HttpService } from '../../service/http-service/http.service';
import { DeviceInfoService } from '../../service/device-info/device-info.service';
import { URL } from 'src/app/const/url.const';
import {
  AuthResponse,
  AuthTokenPayload,
} from 'src/app/security/auth.interface';
import { DateService } from '../../service/date/date.service';
import { HttpStatusCode } from 'src/app/const/http.const';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private authToken: WritableSignal<string | null> = signal(null);
  public applicationId: WritableSignal<string> = signal('');

  constructor(
    private httpService: HttpService,
    private deviceInfoService: DeviceInfoService,
    private dateService: DateService,
  ) {}

  public getToken(): string | null {
    return this.authToken();
  }

  public setToken(authToken: string) {
    this.authToken.set(authToken);
  }

  public authTokenGenerate(): Observable<AuthResponse> {
    const osVersion: string = this.deviceInfoService.osVersion();
    const deviceId: string = this.deviceInfoService.deviceId();
    const payload: AuthTokenPayload = {
      osVersion,
      deviceId,
      dateToday: this.dateService.dateToday,
    };

    return this.httpService
      .postRequest<AuthResponse>(URL.authTokenGeneration, payload)
      .pipe(
        tap((res) => {
          if (res.status === HttpStatusCode.OK) {
            this.setToken(res.token);
            this.applicationId.set(res.applicationId);
          }
        }),
      );
  }
}
