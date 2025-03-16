import { Component, OnInit } from '@angular/core';
import { FavoritosService } from 'src/app/services/favoritos.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService) {}

  ngOnInit(): void {
    this.getFavoritos();
  }

  getFavoritos(): void {
    this.favoritosService.getFavoritos().subscribe({
      next: (res) => {
        this.favoritos = res as any[];
      },
      error: (err) => {
        console.error('Error al obtener favoritos:', err);
      }
    });    
  }

  eliminarFavorito(id: number): void {
    this.favoritosService.deleteFavorito(id).subscribe({
      next: () => {
        console.log('Favorito eliminado');
        this.getFavoritos();
      },
      error: (err) => {
        console.error('Error al eliminar favorito:', err);
      }
    });
  }
}
