import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/security/token-service/token.service';

@Component({
  selector: 'app-application-id-footer',
  templateUrl: './application-id-footer.component.html',
  styleUrls: ['./application-id-footer.component.scss'],
})
export class ApplicationIdFooterComponent implements OnInit {
  applicationId: string = '';
  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.applicationId = this.tokenService.applicationId();
  }
}
