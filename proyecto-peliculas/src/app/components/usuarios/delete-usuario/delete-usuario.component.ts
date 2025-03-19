import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsuarioService } from 'src/app/services/usuario.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from 'src/app/models/usuario';
import { CLOSE, ERROR } from 'src/app/models/messages';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.component.html',
  styleUrls: ['./delete-usuario.component.scss']
})
export class DeleteUsuarioComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DeleteUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public usuario: Usuario,
    private servicioUsuario: UsuarioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async deleteUser(): Promise<void> {
    try {
      const RESP = await this.servicioUsuario.deleteUsuario(this.usuario).toPromise();

      if (RESP?.ok) {
        this.showSnackbar(RESP.message ?? 'Usuario eliminado correctamente');
        this.dialogRef.close({ ok: true, data: RESP.data });
      } else {
        this.showSnackbar(RESP?.message ?? ERROR);
      }
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
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
