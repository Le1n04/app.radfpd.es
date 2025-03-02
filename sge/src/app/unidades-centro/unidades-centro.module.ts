import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnidadesCentroRoutingModule } from './unidades-centro-routing.module';
import { UnidadesCentroComponent } from './unidades-centro.component';


@NgModule({
  declarations: [UnidadesCentroComponent],
  imports: [
    CommonModule,
    UnidadesCentroRoutingModule
  ]
})
export class UnidadesCentroModule { }
