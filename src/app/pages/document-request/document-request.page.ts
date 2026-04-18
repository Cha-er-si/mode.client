import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BusinessHeaderComponent, ChatComponent } from 'src/app/components';
import { Flow } from 'src/app/models/chat.model';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';
import { LoadingService } from 'src/app/service/loading-service/loading.service';

import chatFlow from './document-request.json';
import placeHolderText from './document-request.placeholders.json';
import chatMessage from './document-request.messages.json';
import { ChatFooterComponent } from 'src/app/components/common/chat/chat-footer/chat-footer.component';
import { ChatEngineService } from 'src/app/service/chat-engine/chat-engine.service';
@Component({
  selector: 'app-document-request',
  templateUrl: './document-request.page.html',
  styleUrls: ['./document-request.page.scss'],
  standalone: true,
  imports: [
    ...IONIC_COMPONENTS,
    CommonModule,
    FormsModule,
    BusinessHeaderComponent,
    ChatComponent,
    ChatFooterComponent,
  ],
})
export class DocumentRequestPage implements OnInit {
  didPageLoad: boolean = false;
  chatMessages: any = chatMessage;
  placeHolderTexts: any = placeHolderText;
  chatFlow: Flow = chatFlow as Flow;

  constructor(
    private loadingService: LoadingService,
    public engine: ChatEngineService,
  ) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.didPageLoad = true;
    this.loadingService.dismiss();
  }
}
