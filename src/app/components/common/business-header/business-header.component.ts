import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/security/token-service/token.service';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';

@Component({
  selector: 'app-business-header',
  templateUrl: './business-header.component.html',
  styleUrls: ['./business-header.component.scss'],
  imports: [IONIC_COMPONENTS],
})
export class BusinessHeaderComponent implements OnInit {
  applicationId: string = '';

  constructor(private tokenService: TokenService) {
    this.applicationId = this.tokenService.applicationId();
  }

  ngOnInit() {}
}
