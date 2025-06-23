import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../../../services/stateservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './auth.html',
  styles: ``
})
export class Auth {
  isLoggedIn$: Observable<boolean>;
  showLogin = true; // toggle between login and register
  

  toggleView() {
    this.showLogin = !this.showLogin;
  }

  constructor(public state: StateService) {
    this.isLoggedIn$ = this.state.isLoggedIn$;
  }
}


