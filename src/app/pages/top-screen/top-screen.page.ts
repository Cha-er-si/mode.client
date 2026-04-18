import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IONIC_COMPONENTS } from 'src/app/shared/shared-component';
import { HeaderComponent } from 'src/app/components';
import { TokenService } from 'src/app/security/token-service/token.service';
import { Router } from '@angular/router';
import {
  getEnumValue,
  MENU_ITEMS,
  MenuItems,
} from 'src/app/models/top-screen.model';
import { LoadingService } from 'src/app/service/loading-service/loading.service';

@Component({
  selector: 'app-top-screen',
  templateUrl: './top-screen.page.html',
  styleUrls: ['./top-screen.page.scss'],
  standalone: true,
  imports: [...IONIC_COMPONENTS, CommonModule, FormsModule, HeaderComponent],
})
export class TopScreenPage implements OnInit {
  public menuItems: MenuItems[] = MENU_ITEMS;
  constructor(
    private tokenService: TokenService,
    private router: Router,
    private loadingService: LoadingService,
  ) {}

  ngOnInit() {}

  async onMenuClick(pageName: string) {
    this.loadingService.present();
    const menuId: string = this.menuItems.find(
      (menu) => menu.page === pageName,
    )!.id;
    const businessCode = getEnumValue(menuId);
    if (businessCode) {
      this.tokenService.authTokenGenerate(businessCode).subscribe({
        next: () => {
          this.router.navigateByUrl(pageName);
        },
        error: (err) => console.error(err),
      });
    }
  }
}
