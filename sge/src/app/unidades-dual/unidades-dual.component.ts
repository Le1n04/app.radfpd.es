import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { UnidadesDualService } from '../services/unidades-dual.service';
import { MatDialog } from '@angular/material/dialog';
import { EditUnidadDualComponent } from './edit-unidad-dual/edit-unidad-dual.component';

@Component({
  selector: 'app-unidades-dual',
  templateUrl: './unidades-dual.component.html',
  styleUrls: ['./unidades-dual.component.scss']
})
export class UnidadesDualComponent implements OnInit {
  displayedColumns: string[] = ['id_unidad_dual', 'unidad_dual', 'observaciones', 'actions'];
  dataSource = new MatTableDataSource<any>();

  idUnidadDualFilter = new FormControl();
  unidadDualFilter = new FormControl();
  observacionesFilter = new FormControl();

  constructor(private unidadesDualService: UnidadesDualService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadData();

    this.idUnidadDualFilter.valueChanges.subscribe(value => {
      this.applyFilter('id_unidad_dual', value);
    });

    this.unidadDualFilter.valueChanges.subscribe(value => {
      this.applyFilter('unidad_dual', value);
    });

    this.observacionesFilter.valueChanges.subscribe(value => {
      this.applyFilter('observaciones', value);
    });
  }

  loadData(): void {
    this.unidadesDualService.getAllUnidadesDual().subscribe(response => {
      this.dataSource.data = response.data;
    });
  }

  applyFilter(column: string, value: string): void {
    this.dataSource.filterPredicate = (data, filter) => {
      const textToSearch = data[column] ? data[column].toLowerCase() : '';
      return textToSearch.includes(filter);
    };
    this.dataSource.filter = value.trim().toLowerCase();
  }

  editUnidadDual(unidadDual: any): void {
    const dialogRef = this.dialog.open(EditUnidadDualComponent, {
      width: '400px',
      data: { ...unidadDual }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.unidadesDualService.editUnidadDual(result).subscribe(response => {
          const updatedUnit = response.data;
          this.dataSource.data = this.dataSource.data.map(item => 
            item.id_unidad_dual === updatedUnit.id_unidad_dual ? updatedUnit : item
          );
          this.dataSource._updateChangeSubscription();
          console.log('Unidad dual actualizada');
        });
      }
    });
  }

  deleteUnidadDual(unidadDual: any): void {
    if (confirm('¿Estás seguro de eliminar esta unidad dual?')) {
      this.unidadesDualService.deleteUnidadDual(unidadDual.id_unidad_dual).subscribe(() => {
        this.dataSource.data = this.dataSource.data.filter(item => item.id_unidad_dual !== unidadDual.id_unidad_dual);
        this.dataSource._updateChangeSubscription();
        console.log('Unidad dual eliminada');
      });
    }
  }
}
