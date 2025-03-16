import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { SearchService } from '../../services/search.service';
import { Pelicula } from '../../models/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];
  currentPage = 1;
  loading = false;
  isFetching = false;

  constructor(
    private peliculasService: PeliculasService,
    private searchService: SearchService,
    private router: Router,

  ) {}

  ngOnInit(): void {
    this.cargarMultiplesPaginas(1, 3);

    this.searchService.search$.subscribe(query => {
      this.onSearch(query);
    });
  }

  cargarPeliculas(page: number): void {
    if (this.loading || this.isFetching) return;

    this.isFetching = true;
    this.loading = true;

    this.peliculasService.getPopulares(page).subscribe((data: any) => {
      const nuevasPeliculas: Pelicula[] = data.results;

      this.peliculas = [...this.peliculas, ...nuevasPeliculas]
        .reduce((unique: Pelicula[], pelicula: Pelicula) => {
          if (!unique.some((p: Pelicula) => p.id === pelicula.id)) {
            unique.push(pelicula);
          }
          return unique;
        }, []);

      this.currentPage++;
      this.isFetching = false;
      this.loading = false;
    }, () => {
      this.isFetching = false;
      this.loading = false;
    });
  }

  cargarMultiplesPaginas(inicio: number, fin: number): void {
    const requests = [];
    for (let i = inicio; i <= fin; i++) {
      requests.push(this.peliculasService.getPopulares(i).toPromise());
    }

    Promise.all(requests).then((responses) => {
      responses.forEach((data) => {
        const nuevasPeliculas: Pelicula[] = data.results;
        this.peliculas = [...this.peliculas, ...nuevasPeliculas];
      });

      this.peliculas = this.peliculas.reduce((unique: Pelicula[], pelicula: Pelicula) => {
        if (!unique.some((p: Pelicula) => p.id === pelicula.id)) {
          unique.push(pelicula);
        }
        return unique;
      }, []);
    });
  }

  onSearch(query: string): void {
    if (!query) {
      this.peliculas = [];
      this.currentPage = 1;
      this.cargarMultiplesPaginas(1, 3);
    } else {
      this.peliculasService.buscarPeliculas(query, 1).subscribe((data: any) => {
        this.peliculas = data.results;
      });
    }
  }

  onImageError(event: any): void {
    event.target.src = 'assets/img/default-movie.png';
  }

  verDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }
}
