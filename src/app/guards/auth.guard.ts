import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    private router = inject(Router);

    canActivate(): boolean {
        const isAuthenticated = !!localStorage.getItem('authToken');
        if (!isAuthenticated) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      }
}