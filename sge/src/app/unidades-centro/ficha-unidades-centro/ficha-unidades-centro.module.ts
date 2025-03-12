import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatosEntidadRoutingModule } from './ficha-unidades-centro-routing.module';
import { DatosEntidadComponent } from './ficha-unidades-centro.component';
//import { CrudMaterialModule } from '../../modules/crud-material/crud-material.module';
import { CrudMaterialModule } from '../../modules/crud-material/crud-material.module'

@NgModule({
  declarations: [DatosEntidadComponent],
  imports: [
    CommonModule,
    DatosEntidadRoutingModule,
    CrudMaterialModule
  ]
})
export class DatosEntidadModule { }
