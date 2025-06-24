import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _isLoggedIn = new BehaviorSubject<boolean>(true); // you can default to false
  isLoggedIn$ = this._isLoggedIn.asObservable();

  public login() {
    this._isLoggedIn.next(true);
  }

  public logout() {
    this._isLoggedIn.next(false);
  }

  // ✅ Add this method
  public isLoggedIn(): boolean {
    return this._isLoggedIn.getValue();
  }
}
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GuestGuard implements CanActivate {
  constructor(private state: StateService, private router: Router) {}

  canActivate(): boolean {
    if (!this.state.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/workspace']);
      return false;
    }
  }
}


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private state: StateService, private router: Router) {}

  canActivate(): boolean {
    if (this.state.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/auth']);
      return false;
    }
  }
}

