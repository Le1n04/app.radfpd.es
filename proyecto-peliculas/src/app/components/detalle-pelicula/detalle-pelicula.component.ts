import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.scss']
})
export class DetallePeliculaComponent implements OnInit {
  pelicula: any;
  similares: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private favoritosService: FavoritosService,
    private router: Router
  ) {}

  onImageError(event: any): void {
    event.target.src = 'assets/img/default-movie.png';
  }
  

  getGeneros(): string {
    return this.pelicula?.genres?.length 
      ? this.pelicula.genres.map((g: any) => g.name).join(', ') 
      : 'Sin género';
  }

  guardarFavorito(): void {
    const userId = 61;

    if (this.pelicula) {
      this.favoritosService
        .addFavorito(userId, this.pelicula.title , this.pelicula.poster_path, this.pelicula.release_date)
        .subscribe({
          next: (res) => {
            console.log('Película añadida a favoritos:', res);
            alert('Película añadida a favoritos!');
          },
          error: (err) => {
            console.error('Error al añadir favorito:', err);
            alert('Error al añadir la película a favoritos.');
          }
        });
    }
  }

  cargarSimilares(id: number): void {
    this.peliculasService.getSimilares(id).subscribe({
      next: (data) => {
        this.similares = data.results.slice(0, 11);
        console.log('Películas similares:', this.similares);
      },
      error: (error) => {
        console.error('Error al obtener películas similares:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle', id]).then(() => {
      this.cargarDetalle(id);
      this.cargarSimilares(id);
    });
  }

  cargarDetalle(id: number): void {
    this.peliculasService.getDetalle(id).subscribe({
      next: (data) => {
        this.pelicula = data;
        console.log(this.pelicula);
        this.cargarSimilares(id);
      },
      error: (error) => {
        console.error('Error al obtener el detalle:', error);
      }
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cargarDetalle(+id);
    }
  }
}
