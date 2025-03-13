import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnidadesCentroComponent } from './unidades-centro.component';

const routes: Routes = [
  {
    path: ':id_unidad_centro',
    component: UnidadesCentroComponent,
    children: [
      {
        path: 'datos-basicos-unidad-centro',
        outlet: 'sidebar',
        loadChildren: () => import('./datos-unidad-centro/datos-basicos-unidad-centro/datos-basicos-unidad-centro.module').then(m => m.DatosBasicosUnidadCentroModule)
      },
      {
        path: 'alumnos-unidad-centro',
        outlet: 'sidebar',
        loadChildren: () => import('./datos-unidad-centro/alumnos-unidad-centro/alumnos-unidad-centro.module').then(m => m.AlumnosUnidadCentroModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesCentroRoutingModule { }
