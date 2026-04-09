import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { ApplicationIdFooterComponent } from 'src/app/components/application-id-footer/application-id-footer.component';

@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.page.html',
  styleUrls: ['./document-request.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    ApplicationIdFooterComponent,
  ],
})
export class DocumentRequestPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
