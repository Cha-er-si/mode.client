import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) {}

  public getRequest(url: string) {
    return this.httpClient.get(`${this.apiUrl}${url}`);
  }

  public postRequest<T>(
    url: string,
    payload: any,
    authToken?: string,
  ): Observable<T> {
    const URL: string = `${this.apiUrl}${url}`;
    let headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    if (authToken) {
      headers.set('Authorization', `Bearer ${authToken}`);
    }

    const options: any = {
      headers,
    };

    return this.httpClient.post<T>(URL, payload, options) as Observable<T>;
  }
}
