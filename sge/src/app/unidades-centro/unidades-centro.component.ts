import { Component, OnInit } from '@angular/core';
import { UnidadesCentroService } from './unidades-centro.service';

@Component({
  selector: 'app-unidades-centro',
  templateUrl: './unidades-centro.component.html',
  styleUrls: ['./unidades-centro.component.scss']
})
export class UnidadesCentroComponent implements OnInit {
  unidades: any[] = [];

  constructor(private unidadesService: UnidadesCentroService) {}

  ngOnInit() {
    this.getUnidades();
  }

  getUnidades() {
    this.unidadesService.getUnidadesCentro().subscribe(data => {
      this.unidades = data;
    });
  }

  eliminarUnidad(id: number) {
    this.unidadesService.deleteUnidadCentro(id).subscribe(() => {
      this.getUnidades();
    });
  }
}
