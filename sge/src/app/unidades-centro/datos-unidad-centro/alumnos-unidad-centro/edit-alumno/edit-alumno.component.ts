import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AlumnadoService } from 'src/app/services/alumnado.service';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
})
export class EditAlumnoComponent implements OnInit {
  alumnoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alumnadoService: AlumnadoService,
    public dialogRef: MatDialogRef<EditAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.log('Alumno recibido:', this.data.alumno);
  
    this.alumnoForm = this.fb.group({
      id: [this.data.alumno.id, Validators.required],
      nombre: [this.data.alumno.nombre, Validators.required],
      apellidos: [this.data.alumno.apellidos, Validators.required],
      fecha_nacimiento: [this.data.alumno.fecha_nacimiento, Validators.required],
      linkedin: [this.data.alumno.linkedin],
      nivel_ingles: [this.data.alumno.nivel_ingles],
      minusvalia: [this.data.alumno.minusvalia],
      otra_formacion: [this.data.alumno.otra_formacion],
      id_unidad_centro: [{ value: this.data.alumno.id_unidad_centro, disabled: true }, Validators.required] 
    });
  }
  
  
  

  save() {
    if (this.alumnoForm.valid) {
      const alumnoActualizado = this.alumnoForm.getRawValue();
  
      console.log("Datos enviados (con id_unidad_centro):", alumnoActualizado);
  
      this.alumnadoService.editAlumno(alumnoActualizado).subscribe(res => {
        console.log("Respuesta del backend:", res);
        if (res.status) {
          this.dialogRef.close(true);
        } else {
          console.error('Error al actualizar:', res.message);
        }
      });
    }
  }
  
  
  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
