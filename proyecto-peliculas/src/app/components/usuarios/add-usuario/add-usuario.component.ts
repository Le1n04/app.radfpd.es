import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RolesService } from 'src/app/services/roles.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Rol } from 'src/app/models/rol';
import { CLOSE, ERROR, INVALID_FORM } from 'src/app/models/messages';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.scss']
})
export class AddUsuarioComponent implements OnInit {
  usuarioForm: FormGroup = new FormGroup({});
  roles: Rol[] = [];

  constructor(
    public dialogRef: MatDialogRef<AddUsuarioComponent>,
    private servicioRoles: RolesService,
    private servicioUsuario: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getRoles();
  }

  initForm(): void {
    this.usuarioForm = new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      id_rol: new FormControl('', [Validators.required]),
      nombre_publico: new FormControl(''),
      observaciones: new FormControl('')
    });
  }

  async getRoles(): Promise<void> {
    try {
      const RESPONSE = await this.servicioRoles.getAllRoles().toPromise();
      if (RESPONSE?.ok) {
        this.roles = RESPONSE.data as Rol[];
      } else {
        this.showSnackbar(ERROR);
      }
    } catch (error) {
      console.error('Error al obtener roles:', error);
      this.showSnackbar(ERROR);
    }
  }

  async confirmAdd(): Promise<void> {
    if (this.usuarioForm.invalid) {
      this.showSnackbar(INVALID_FORM);
      return;
    }

    const usuario = this.usuarioForm.value;

    try {
      const RESP = await this.servicioUsuario.addUsuario(usuario).toPromise();
      if (RESP?.ok) {
        this.showSnackbar(RESP?.message ?? ERROR);
        this.dialogRef.close({ ok: true, data: RESP.data });
      } else {
        this.showSnackbar(RESP?.message || ERROR);
      }
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      this.showSnackbar(ERROR);
    }
  }

  private showSnackbar(message: string): void {
    this.snackBar.open(message, CLOSE, { duration: 5000 });
  }

  onNoClick(): void {
    this.dialogRef.close({ ok: false });
  }
}
