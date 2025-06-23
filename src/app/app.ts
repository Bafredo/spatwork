import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/common/header/header";
import { Sidebar } from "./components/common/sidebar/sidebar";
import { StateService } from './services/stateservice';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, CommonModule],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected title = 'spatwork';
  isLoggedIn$: Observable<boolean>;

  constructor(public stateService: StateService) {
    this.isLoggedIn$ = stateService.isLoggedIn$;
  }
}
