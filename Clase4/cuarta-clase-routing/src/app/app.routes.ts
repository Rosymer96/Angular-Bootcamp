import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { DetalleUsuarioComponent } from './components/detalle-usuario/detalle-usuario.component';

export const routes: Routes = [
  //   { path: '', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'usuario/1', component: DetalleUsuarioComponent },
  //   { path: '**', redirectTo: 'login' },
];
