import { Component, OnInit } from '@angular/core';
import { FavoritosService } from '../../services/favoritos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private favoritosService: FavoritosService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerFavoritos();
  }

  obtenerFavoritos() {
    let userData = localStorage.getItem('id_usuario');
    let len = userData?.length;
  
    if (userData && len) {
      userData = userData.substring(1, len - 1);
      const userId = Number(userData);
  
      this.favoritosService.getFavoritos(userId).subscribe({
        next: (res) => {
          this.favoritos = res.data || [];
        },
        error: (err) => {
          console.error('Error al cargar favoritos:', err);
          alert('Error al cargar favoritos.');
        },
      });
    } else {
      console.error('No se encontró información de usuario en localStorage.');
    }
  }  

  onImageError(event: Event) {
    (event.target as HTMLImageElement).src = 'assets/img/default-movie.png';
  }

}
