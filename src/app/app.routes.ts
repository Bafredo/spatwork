// app.routes.ts
import { Routes } from '@angular/router';
import { Workspace } from './components/pages/workspace/workspace';
import { AuthGuard, GuestGuard } from './services/stateservice';
import { Auth } from './components/pages/auth/auth';
import { Home } from './components/pages/home/home';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'auth', component: Auth, canActivate: [GuestGuard] },
  { path: 'workspace', component: Workspace, canActivate: [AuthGuard] },
  { path: 'home', component: Home, canActivate: [AuthGuard] },
];
