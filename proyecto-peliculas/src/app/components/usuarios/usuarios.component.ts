import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { DeleteUsuarioComponent } from './delete-usuario/delete-usuario.component';
import { FormControl } from '@angular/forms';

import { Overlay } from '@angular/cdk/overlay';
import { Usuario } from 'src/app/models/usuario';
import { Permises } from 'src/app/services/api-response';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource();
  permises!: Permises;

  idFilter = new FormControl();
  usuarioFilter = new FormControl();
  nombreFilter = new FormControl();
  rolFilter = new FormControl();

  displayTable = false;

  displayedColumns: string[] = [];
  private filterValues = { id_usuario: '', usuario: '', nombre_publico: '', rol: '', habilitado: 0 };

  constructor(
    public dialog: MatDialog,
    private servicioUsuarios: UsuarioService,
    private overlay: Overlay
  ) { }

  ngOnInit() {
    this.getUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  async getUsuarios() {
    const RESPONSE = await this.servicioUsuarios.getAllUsuarios().toPromise();

    if (RESPONSE && RESPONSE.ok) {
      if (RESPONSE.permises) {
        this.permises = RESPONSE.permises;
      }

      this.displayedColumns = ['id_usuario', 'usuario', 'nombre_publico', 'rol', 'habilitado', 'actions'];
      this.servicioUsuarios.usuarios = RESPONSE.data as Usuario[];
      this.dataSource.data = this.servicioUsuarios.usuarios;
      this.dataSource.filterPredicate = this.createFilter();
      this.onChanges();
    }
  }

  async addUsuario() {
    const dialogRef = this.dialog.open(AddUsuarioComponent, {
      width: '500px',
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    const RESP = await dialogRef.afterClosed().toPromise();

    if (RESP && RESP.ok) {
      this.servicioUsuarios.usuarios.push(RESP.data);
      this.dataSource.data = this.servicioUsuarios.usuarios;
    }
  }

  async editUsuario(usuario: Usuario) {
    const dialogRef = this.dialog.open(EditUsuarioComponent, {
      data: usuario,
      width: '500px',
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    const RESP = await dialogRef.afterClosed().toPromise();

    if (RESP && RESP.ok) {
      this.servicioUsuarios.updateUsuario(RESP.data);
      this.dataSource.data = this.servicioUsuarios.usuarios;
    }
  }

  async deleteUsuario(usuario: Usuario) {
    const dialogRef = this.dialog.open(DeleteUsuarioComponent, {
      data: usuario,
      scrollStrategy: this.overlay.scrollStrategies.noop()
    });

    const RESP = await dialogRef.afterClosed().toPromise();

    if (RESP && RESP.ok) {
      this.servicioUsuarios.removeUsuario(RESP.data.id_usuario);
      this.dataSource.data = this.servicioUsuarios.usuarios;
    }
  }

  createFilter(): (usuario: any, filter: string) => boolean {
    return (usuario: any, filter: string): boolean => {
      const searchTerms = JSON.parse(filter);

      return usuario.id_usuario.toString().indexOf(searchTerms.id_usuario.toLowerCase()) !== -1 &&
        usuario.usuario.toLowerCase().indexOf(searchTerms.usuario.toLowerCase()) !== -1 &&
        usuario.nombre_publico.toLowerCase().indexOf(searchTerms.nombre_publico.toLowerCase()) !== -1 &&
        usuario.rol.toLowerCase().indexOf(searchTerms.rol.toLowerCase()) !== -1 &&
        (searchTerms.habilitado === 'todos' ? true : usuario.habilitado === Number(searchTerms.habilitado));
    };
  }

  onChanges(): void {
    this.idFilter.valueChanges.subscribe(value => {
      this.filterValues.id_usuario = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.usuarioFilter.valueChanges.subscribe(value => {
      this.filterValues.usuario = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.nombreFilter.valueChanges.subscribe(value => {
      this.filterValues.nombre_publico = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });

    this.rolFilter.valueChanges.subscribe(value => {
      this.filterValues.rol = value;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
  }

  buscarHabilitados(event: any) {
    let value: number;

    if (event.value === 'todos') {
      value = -1;
    } else {
      value = Number(event.value);
    }

    this.filterValues.habilitado = value;
    this.dataSource.filter = JSON.stringify(this.filterValues);
  }
}
