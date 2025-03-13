import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnadoService } from 'src/app/services/alumnado.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html'
})
export class AddAlumnoComponent implements OnInit {

  alumnoForm: FormGroup;

  constructor(
    private alumnadoService: AlumnadoService,
    public dialogRef: MatDialogRef<AddAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id_unidad_centro: number },
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.alumnoForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      nombre: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      apellidos: new FormControl('', [Validators.required]),
      fecha_nacimiento: new FormControl('', Validators.required),
      linkedin: new FormControl('', Validators.pattern('https?://.+')),
      nivel_ingles: new FormControl(''),
      minusvalia: new FormControl(0, [Validators.min(0), Validators.max(100)]),
      otra_formacion: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.alumnoForm.valid) {
      const alumno = {
        ...this.alumnoForm.value,
        id_unidad_centro: this.data.id_unidad_centro
      };

      this.alumnadoService.addAlumno(alumno).subscribe(res => {
        if (res.status) {
          this.dialogRef.close(true);
        } else {
          alert(res.message);
        }
      });
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
