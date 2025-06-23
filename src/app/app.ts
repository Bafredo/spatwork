import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/common/header/header";
import { Sidebar } from "./components/common/sidebar/sidebar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Sidebar],
  templateUrl: './app.html',
  styles: [],
})
export class App {
  protected title = 'spatwork';
}
