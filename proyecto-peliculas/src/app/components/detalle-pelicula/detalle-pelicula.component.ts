import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {
  pelicula: any;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private favoritosService: FavoritosService,
  ) {}

  getGeneros(): string {
    return this.pelicula?.genres?.length 
      ? this.pelicula.genres.map((g: any) => g.name).join(', ') 
      : 'Sin género';
  }
  

  guardarFavorito(): void {
    if (this.pelicula) {
      this.favoritosService.addFavorito(this.pelicula).subscribe({
        next: () => {
          console.log('Película añadida a favoritos');
        },
        error: (error) => {
          console.error('Error al añadir a favoritos:', error);
        }
      });
    }
  }
   

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.peliculasService.getDetalle(+id).subscribe({
        next: (data) => {
          this.pelicula = data;
          console.log(this.pelicula);
        },
        error: (error) => {
          console.error('Error al obtener el detalle:', error);
        }
      });
    }
  }
}
