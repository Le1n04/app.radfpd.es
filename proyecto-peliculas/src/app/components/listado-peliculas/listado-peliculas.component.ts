import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { SearchService } from '../../services/search.service';
import { Pelicula } from '../../models/pelicula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit, AfterViewInit {
  peliculas: Pelicula[] = [];
  currentPage = 1;
  loading = false;
  totalPages = 1;

  @ViewChild('sentinel', { static: false }) sentinel!: ElementRef;

  private observer!: IntersectionObserver;

  constructor(
    private peliculasService: PeliculasService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarPeliculasForzada(1);
    this.cargarPeliculasForzada(2);
    this.cargarPeliculasForzada(3);

    setTimeout(() => {
      if (!this.sentinelIsVisible() && !this.loading) {
        this.cargarPeliculas(this.currentPage);
      }

      this.iniciarIntersectionObserver();
    }, 300);

    this.searchService.search$.subscribe(query => {
      this.onSearch(query);
    });
  }

  ngAfterViewInit(): void {}

  iniciarIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.loading && this.currentPage <= this.totalPages) {
          this.cargarPeliculas(this.currentPage);
        }
      },
      { threshold: 0.1 }
    );

    if (this.sentinel) {
      this.observer.observe(this.sentinel.nativeElement);
    }
  }

  cargarPeliculas(page: number): void {
    if (this.loading || this.currentPage > this.totalPages) return;

    this.loading = true;

    this.peliculasService.getPopulares(page).subscribe({
      next: (data) => {
        this.totalPages = data.total_pages;

        const nuevasPeliculas: Pelicula[] = data.results;

        this.peliculas = [...this.peliculas, ...nuevasPeliculas].reduce(
          (unique: Pelicula[], pelicula: Pelicula) => {
            if (!unique.some((p: Pelicula) => p.id === pelicula.id)) {
              unique.push(pelicula);
            }
            return unique;
          },
          []
        );

        this.currentPage++;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  // ✅ Esta función fuerza la carga directa sin pasar por el observer
  cargarPeliculasForzada(page: number): void {
    if (this.loading || this.currentPage > this.totalPages) return;

    this.loading = true;
    this.peliculasService.getPopulares(page).subscribe({
      next: (data) => {
        this.totalPages = data.total_pages;

        const nuevasPeliculas: Pelicula[] = data.results;

        this.peliculas = [...this.peliculas, ...nuevasPeliculas].reduce(
          (unique: Pelicula[], pelicula: Pelicula) => {
            if (!unique.some((p: Pelicula) => p.id === pelicula.id)) {
              unique.push(pelicula);
            }
            return unique;
          },
          []
        );

        this.currentPage++;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  sentinelIsVisible(): boolean {
    if (!this.sentinel) return false;
    const rect = this.sentinel.nativeElement.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  onSearch(query: string): void {
    if (!query) {
      this.peliculas = [];
      this.currentPage = 1;
      this.cargarPeliculasForzada(1);
      this.cargarPeliculasForzada(2);
      this.cargarPeliculasForzada(3);

      setTimeout(() => {
        if (!this.sentinelIsVisible() && !this.loading) {
          this.cargarPeliculas(this.currentPage);
        }

        this.iniciarIntersectionObserver();
      }, 300);
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
