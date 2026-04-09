import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TokenService } from './token-service/token.service';

export const authGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const applicationId = tokenService.applicationId();
  const token = tokenService.getToken();

  if (applicationId && token) {
    return true;
  } else {
    return router.parseUrl('/top');
  }
};
