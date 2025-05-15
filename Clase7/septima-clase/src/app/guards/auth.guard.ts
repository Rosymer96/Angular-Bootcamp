import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token: string | null = localStorage.getItem('token');
  console.log('authGuard', token);
  if (token !== null) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
