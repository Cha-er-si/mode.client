import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';
import { HeaderComponent } from 'src/app/components';
import { TokenService } from 'src/app/security/token-service/token.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-top-screen',
  templateUrl: './top-screen.page.html',
  styleUrls: ['./top-screen.page.scss'],
  standalone: true,
  imports: [...IONIC_COMPONENTS, CommonModule, FormsModule, HeaderComponent],
})
export class TopScreenPage implements OnInit {
  menuItems = [
    {
      text: 'Document Request',
      icon: 'document-text-outline',
      page: 'document-request',
    },
    {
      text: 'Coming Soon...',
      icon: 'alert-circle-outline',
      page: 'na',
    },
    {
      text: 'Coming Soon...',
      icon: 'alert-circle-outline',
      page: 'na',
    },
    {
      text: 'Coming Soon...',
      icon: 'alert-circle-outline',
      page: 'na',
    },
  ];
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private loadingController: LoadingController,
  ) {}

  ngOnInit() {}

  async onMenuClick(pageName: string) {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
    });
    loading.present();
    this.tokenService.authTokenGenerate().subscribe({
      next: () => {
        this.loadingController.dismiss();
        this.router.navigateByUrl(pageName);
      },
      error: (err) => console.error(err),
    });
  }
}
