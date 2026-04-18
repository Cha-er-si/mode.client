import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  loader!: HTMLIonLoadingElement;
  constructor(private loadingController: LoadingController) {
    this.loadingController
      .create({
        spinner: 'bubbles',
      })
      .then((result) => (this.loader = result));
  }

  present() {
    if (this.loader) this.loader.present();
  }

  dismiss() {
    if (this.loader) this.loader.dismiss();
  }
}
