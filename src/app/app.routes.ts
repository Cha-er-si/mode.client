import { Routes } from '@angular/router';
import { authGuard } from './security/auth.guard';

export const routes: Routes = [
  {
    path: 'top',
    loadComponent: () =>
      import('./pages/top-screen/top-screen.page').then((m) => m.TopScreenPage),
  },
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'full',
  },
  {
    path: 'document-request',
    loadComponent: () =>
      import('./pages/document-request/document-request.page').then(
        (m) => m.DocumentRequestPage,
      ),
    canActivate: [authGuard],
  },
];
