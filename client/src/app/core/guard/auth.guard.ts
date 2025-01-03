import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const currentUser = this.getCurrentUser();

    if (!currentUser || currentUser.role !== 1) {
    //   alert('Access denied! Admins only.');
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
