import { CanActivateFn } from '@angular/router';

export const authGuard2Guard: CanActivateFn = (route, state) => {
  return false;
};
