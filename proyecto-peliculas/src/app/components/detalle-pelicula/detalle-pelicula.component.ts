import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { FavoritosService } from 'src/app/services/favoritos.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private router: Router,
    private snackBar: MatSnackBar,
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
    this.snackBar
      .open('¿Seguro que quieres añadir a favoritos?', 'Aceptar', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      .onAction()
      .subscribe(() => {
        const userId = Number(localStorage.getItem('id_usuario')?.substring(1, localStorage.getItem('id_usuario')!.length - 1));
        if (userId) {
          this.favoritosService
            .addFavorito(userId, this.pelicula.title, this.pelicula.poster_path, this.pelicula.release_date)
            .subscribe({
              next: (res) => {
                this.estaEnFavoritos = true;
                this.comprobarSiEstaEnFavoritos();
                this.snackBar.open('Añadido a favoritos', '', { duration: 3000 });
              },
              error: (err) => {
                console.error('Error al añadir a favoritos:', err);
                this.snackBar.open('Error al añadir la película a favoritos', '', { duration: 3000 });
              }
            });
        }
      });
  }

  eliminarFavorito(): void {
    this.snackBar
      .open('¿Seguro que quieres eliminar de favoritos?', 'Aceptar', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
      .onAction()
      .subscribe(() => {
        const userId = Number(localStorage.getItem('id_usuario')?.substring(1, localStorage.getItem('id_usuario')!.length - 1));
        if (userId) {
          this.favoritosService
            .deleteFavorito(userId, this.pelicula.title)
            .subscribe({
              next: () => {
                this.estaEnFavoritos = false;
                this.snackBar.open('Eliminado de favoritos', '', { duration: 3000 });
              },
              error: (err) => {
                console.error('Error al eliminar de favoritos:', err);
                this.snackBar.open('Error al eliminar la película de favoritos', '', { duration: 3000 });
              }
            });
        }
      });
  }

  cargarSimilares(id: number): void {
    this.peliculasService.getSimilares(id).subscribe({
      next: (data) => {
        this.similares = data.results.slice(0, 11);
      },
      error: (error) => {
        console.error('Error al obtener películas similares:', error);
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

    this.router.navigate(['/detalle', movieId]).then(() => {
      this.cargarDetalle(movieId);
      this.cargarSimilares(movieId);
    });
  }

  cargarDetalle(id: number): void {
    this.peliculasService.getDetalle(id).subscribe({
      next: (data) => {
        this.pelicula = data;
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
