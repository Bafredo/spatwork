// app.routes.ts
import { Routes } from '@angular/router';
import { Workspace } from './components/pages/workspace/workspace';
import { AuthGuard, GuestGuard } from './services/stateservice';
import { Auth } from './components/pages/auth/auth';

export const routes: Routes = [
  { path: '', redirectTo: '/workspace', pathMatch: 'full' },
  { path: 'auth', component: Auth, canActivate: [GuestGuard] },
  { path: 'workspace', component: Workspace, canActivate: [AuthGuard] },
];
