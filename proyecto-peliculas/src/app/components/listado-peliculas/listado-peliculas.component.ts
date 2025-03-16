import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {
  peliculas: any[] = [];
  peliculasOriginal: any[] = [];

  constructor(private peliculasService: PeliculasService, private router: Router) {}

  verDetalle(id: number): void {
    this.router.navigate(['/detalle', id]);
  }

  onSearch(searchText: string) {
    console.log('Texto de búsqueda:', searchText);
    this.peliculas = this.peliculasOriginal.filter(pelicula =>
      pelicula.title.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  

  ngOnInit(): void {
    this.peliculasService.getPopulares().subscribe({
      next: (data) => {
        this.peliculas = data.results;
        console.log(this.peliculas);
      },
      error: (error) => {
        console.error('Error al obtener películas:', error);
      }
    });
  }
}
