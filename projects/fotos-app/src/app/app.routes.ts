import { Routes } from '@angular/router';
import { InicioComponent } from '../../Vistas/inicio/inicio';
import { FotosComponent } from '../../Vistas/fotos/fotos';
import { DetalleComponent } from '../../Vistas/detalle/detalle';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, 
  { path: 'fotos', component: FotosComponent }, 
  { path: 'detalle/:id', component: DetalleComponent }, 

  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } 
];