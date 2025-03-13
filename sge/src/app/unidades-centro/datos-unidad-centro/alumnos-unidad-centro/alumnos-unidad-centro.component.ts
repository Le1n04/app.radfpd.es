import { Component, OnInit } from '@angular/core';
import { AlumnadoService } from 'src/app/services/alumnado.service';
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { MatTableDataSource } from '@angular/material/table';
import { UnidadesCentroService } from 'src/app/services/unidades-centro.service';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';


@Component({
  selector: 'app-alumnos-unidad-centro',
  templateUrl: './alumnos-unidad-centro.component.html'
})
export class AlumnosUnidadCentroComponent implements OnInit {

  alumnos: Alumno[] = [];
  dataSource = new MatTableDataSource<Alumno>();
  displayedColumns: string[] = ['nombre', 'apellidos', 'edad', 'linkedin', 'acciones'];
  idUnidadCentro: number;

  constructor(private alumnadoService: AlumnadoService, private route: ActivatedRoute, public dialog: MatDialog, private unidadCentroService: UnidadesCentroService) { }

  openAddAlumnoDialog(): void {
    const dialogRef = this.dialog.open(AddAlumnoComponent, {
      width: '600px',
      data: { id_unidad_centro: this.idUnidadCentro }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getAlumnos();
      }
    });
  }

  ngOnInit(): void {
    this.idUnidadCentro = this.unidadCentroService.unidadCentro?.id_unidad_centro;

    if (this.idUnidadCentro) {
      this.getAlumnos();
    }
  }

  deleteAlumno(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar este alumno?')) {
      this.alumnadoService.deleteAlumno(id).subscribe(res => {
        if (res.status) {
          console.log(res.message);
          this.getAlumnos(); // Refresca la lista tras eliminar
        } else {
          console.error('Error al eliminar:', res.message);
        }
      });
    }
  }
  
  editAlumno(alumno: any) {
    const dialogRef = this.dialog.open(EditAlumnoComponent, {
      width: '600px',
      data: { alumno }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Alumno actualizado, refrescando lista...');
        this.getAlumnos(); // Refresca la lista después de actualizar
      }
    });
  }  

  getAlumnos() {
    this.alumnadoService.getAlumnosPorUnidadCentro(this.idUnidadCentro).subscribe(res => {
      if (res.status) {
        this.dataSource.data = res.data;
      } else {
        this.dataSource.data = [];
      }
    });
  }

}
