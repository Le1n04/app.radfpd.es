import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UnidadesCentroService } from '../unidades-centro.service';

@Component({
  selector: 'app-add-unidad-centro',
  templateUrl: './add-unidad-centro.component.html',
  styleUrls: ['./add-unidad-centro.component.scss']
})
export class AddUnidadCentroComponent implements OnInit {
  unidad = { unidad_centro: '', id_ciclo: '', observaciones: '' };
  id: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private unidadesService: UnidadesCentroService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.unidadesService.getUnidadCentroById(this.id).subscribe(data => {
        this.unidad = data;
      });
    }
  }

  guardarUnidad() {
    if (this.id) {
      this.unidadesService.updateUnidadCentro(this.id, this.unidad).subscribe(() => {
        this.router.navigate(['/unidades-centro']);
      });
    } else {
      this.unidadesService.addUnidadCentro(this.unidad).subscribe(() => {
        this.router.navigate(['/unidades-centro']);
      });
    }
  }
}
