import { Routes } from '@angular/router';
import { PadreComponentComponent } from './components/padre-component/padre-component.component';
import { FormularioComponent } from './components/formulario/formulario/formulario.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ciclo-de-vida', pathMatch: 'full' },
  { path: 'ciclo-de-vida', component: PadreComponentComponent },
  { path: 'form', component: FormularioComponent },
];
