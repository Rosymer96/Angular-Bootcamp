import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsersListComponent, canActivate: [authGuard] },
  {
    path: 'usuario/crear',
    component: UsersCreateComponent,
    canActivate: [authGuard],
  },
  {
    path: 'usuarios/detalle/:id',
    component: UsersCreateComponent,
    canActivate: [authGuard],
  },
];
