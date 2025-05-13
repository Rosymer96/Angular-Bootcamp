import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'usuarios', component: UsersListComponent },
  { path: 'usuario/crear', component: UsersCreateComponent },
  { path: 'usuarios/detalle/:id', component: UsersCreateComponent },
];
