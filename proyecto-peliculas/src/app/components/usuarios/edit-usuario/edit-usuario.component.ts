import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RolesService } from 'src/app/services/roles.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/usuario';
import { Rol } from 'src/app/models/rol';
import { CLOSE, INVALID_FORM, ERROR } from 'src/app/models/messages';

@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.scss']
})
export class EditUsuarioComponent implements OnInit {

  usuarioForm: FormGroup = new FormGroup({});
  roles: Rol[] = [];

  constructor(
    public dialogRef: MatDialogRef<EditUsuarioComponent>,
    private servicioRoles: RolesService,
    private servicioUsuario: UsuarioService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getRoles();
  }

  initForm(): void {
    this.usuarioForm = new FormGroup({
      id_usuario: new FormControl(this.usuario.id_usuario, [Validators.required]),
      usuario: new FormControl(this.usuario.usuario, [Validators.required, Validators.email]),
      nombre_publico: new FormControl(this.usuario.nombre_publico || ''),
      password: new FormControl(''),
      habilitado: new FormControl(Number(this.usuario.habilitado) === 1 ? 1 : 0, [Validators.required]),
      id_rol: new FormControl(this.usuario.id_rol, [Validators.required]),
      observaciones: new FormControl(this.usuario.observaciones || '')
    });
  }

  async getRoles(): Promise<void> {
    try {
      const RESPONSE = await this.servicioRoles.getAllRoles().toPromise();
      if (RESPONSE?.ok) {
        this.roles = RESPONSE.data as Rol[];
      } else {
        this.showSnackbar(RESPONSE?.message ?? ERROR);
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
      const RESP = await this.servicioUsuario.editUsuario(usuario).toPromise();

      if (RESP?.ok) {
        this.showSnackbar(RESP.message ?? 'Usuario actualizado correctamente');
        this.dialogRef.close({ ok: true, data: RESP.data });
      } else {
        this.showSnackbar(RESP?.message ?? ERROR);
      }
    } catch (error) {
      console.error('Error al editar usuario:', error);
      this.showSnackbar(ERROR);
    }
  }

  private showSnackbar(message: string | undefined): void {
    this.snackBar.open(message ?? ERROR, CLOSE, { duration: 5000 });
  }

  onNoClick(): void {
    this.dialogRef.close({ ok: false });
  }
}
