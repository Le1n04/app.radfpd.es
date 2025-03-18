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
  estaEnFavoritos: boolean = false;
  favoritoId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService,
    private favoritosService: FavoritosService,
    private router: Router
  ) { }

  onImageError(event: any): void {
    event.target.src = 'assets/img/default-movie.png';
  }


  getGeneros(): string {
    return this.pelicula?.genres?.length
      ? this.pelicula.genres.map((g: any) => g.name).join(', ')
      : 'Sin género';
  }

  guardarFavorito(): void {
    const userId = Number(localStorage.getItem('id_usuario')?.substring(1, localStorage.getItem('id_usuario')!.length - 1));
    if (userId) {
      this.favoritosService
        .addFavorito(userId, this.pelicula.title, this.pelicula.poster_path, this.pelicula.release_date)
        .subscribe({
          next: (res) => {
            console.log('Película añadida a favoritos');
            this.estaEnFavoritos = true;
            this.comprobarSiEstaEnFavoritos(); // ✅ Volvemos a comprobar para capturar el id
          },
          error: (err) => {
            console.error('Error al añadir a favoritos:', err);
            alert('Error al añadir la película a favoritos.');
          }
        });
    }
  }

  eliminarFavorito(): void {
    const userId = Number(localStorage.getItem('id_usuario')?.substring(1, localStorage.getItem('id_usuario')!.length - 1));
    if (userId) {
      this.favoritosService
        .deleteFavorito(userId, this.pelicula.title)
        .subscribe({
          next: () => {
            console.log('Película eliminada de favoritos');
            this.estaEnFavoritos = false; // ✅ Actualiza el estado
          },
          error: (err) => {
            console.error('Error al eliminar de favoritos:', err);
            alert('Error al eliminar la película de favoritos.');
          }
        });
    }
  }

  cargarSimilares(id: number): void {
    console.log('📌 Cargando similares para id:', id);

    this.peliculasService.getSimilares(id).subscribe({
      next: (data) => {
        console.log('📌 Respuesta de similares:', data);
        this.similares = data.results.slice(0, 11);
        console.log('🎯 Similares cargados:', this.similares);
      },
      error: (error) => {
        console.error('❌ Error al obtener películas similares:', error);
      }
    });
  }


  comprobarSiEstaEnFavoritos(): void {
    const userId = Number(localStorage.getItem('id_usuario')?.substring(1, localStorage.getItem('id_usuario')!.length - 1));

    if (userId && this.pelicula) {
      this.favoritosService.getFavoritos(userId).subscribe({
        next: (res) => {
          const favorito = res.data?.find(
            (fav: any) => fav.titulo === this.pelicula.title
          );
          if (favorito) {
            this.estaEnFavoritos = true;
            this.favoritoId = favorito.id;
          } else {
            this.estaEnFavoritos = false;
            this.favoritoId = null;
          }
        },
        error: (err) => {
          console.error('Error al comprobar favoritos:', err);
        }
      });
    }
  }

  verDetalle(id: number): void {
    const movieId = Number(id);
    console.log('➡️ Navegando a detalles de id:', movieId);

    this.router.navigate(['/detalle', movieId]).then(() => {
      this.cargarDetalle(movieId);
      this.cargarSimilares(movieId);
    });
  }

  cargarDetalle(id: number): void {
    this.peliculasService.getDetalle(id).subscribe({
      next: (data) => {
        this.pelicula = data;
        console.log(this.pelicula);
        this.cargarSimilares(id);
        this.comprobarSiEstaEnFavoritos();
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
