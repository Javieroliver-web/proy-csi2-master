import { Routes } from '@angular/router';
import { InicioComponent } from '../../Vistas/inicio/inicio';
import { FotosComponent } from '../../Vistas/fotos/fotos';
import { DetalleComponent } from '../../Vistas/detalle/detalle';

export const routes: Routes = [
  { path: 'inicio', component: InicioComponent }, // [cite: 19]
  { path: 'fotos', component: FotosComponent }, // [cite: 20]
  { path: 'detalle/:id', component: DetalleComponent }, // [cite: 21]

  // Redirecciones
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' } // Ruta comodín
];