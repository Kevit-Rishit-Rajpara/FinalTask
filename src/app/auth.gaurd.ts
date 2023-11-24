import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // const authService = inject(AuthService);
  const router = inject(Router);
  if (localStorage.getItem('isLogin') === 'true') {
    return true;
  } else {
    router.navigate(['/home']);
    return false;
  }
};
