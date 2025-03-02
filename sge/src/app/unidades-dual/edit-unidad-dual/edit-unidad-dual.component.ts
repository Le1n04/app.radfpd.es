import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadesDualService } from '../../services/unidades-dual.service';

@Component({
  selector: 'app-edit-unidad-dual',
  templateUrl: './edit-unidad-dual.component.html',
  styleUrls: ['./edit-unidad-dual.component.scss']
})
export class EditUnidadDualComponent implements OnInit {
  editForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private unidadesDualService: UnidadesDualService,
    public dialogRef: MatDialogRef<EditUnidadDualComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id_unidad_dual: [{ value: this.data.id_unidad_dual, disabled: true }, Validators.required],
      unidad_dual: [this.data.unidad_dual, Validators.required],
      observaciones: [this.data.observaciones]
    });
  }

  saveChanges(): void {
    if (this.editForm.valid) {
      const updatedData = { ...this.data, ...this.editForm.getRawValue() };
      this.unidadesDualService.editUnidadDual(updatedData).subscribe(response => {
        if (response) {
          this.dialogRef.close(updatedData);
        }
      });
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
