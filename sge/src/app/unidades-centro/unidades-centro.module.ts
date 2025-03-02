import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnidadesCentroComponent } from './unidades-centro.component';
import { AddUnidadCentroComponent } from './add-unidad-centro/add-unidad-centro.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: UnidadesCentroComponent },
  { path: 'add', component: AddUnidadCentroComponent },
  { path: 'edit/:id', component: AddUnidadCentroComponent }
];

@NgModule({
  declarations: [UnidadesCentroComponent, AddUnidadCentroComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnidadesCentroModule { }
