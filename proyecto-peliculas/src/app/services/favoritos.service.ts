import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const ENDPOINT = 'favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private baseUrl = `http://143.47.52.177/api/private/favoritos.php`;

  constructor(private http: HttpClient, private commonService: CommonService) {
    console.log('Base URL:', this.baseUrl);
  }

  getFavoritos(userId: number): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    return this.http.get(`${this.baseUrl}?user_id=${userId}`, { headers });
  }

  addFavorito(userId: number, titulo: string, posterPath: string, releaseDate: string): Observable<any> {
    const token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });

    const body = {
      user_id: userId,
      titulo: titulo,
      poster_path: posterPath,
      release_date: releaseDate,
    };

    console.log("userId", userId, "Titulo", titulo, "posterPath", posterPath, "releaseDate", releaseDate);

    return this.http.post(this.baseUrl, body, { headers });
  }
  
  deleteFavorito(userId: number, titulo: string): Observable<any> {
    const token = localStorage.getItem('token');
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    });
  
    const body = {
      user_id: userId,
      titulo: titulo
    };
  
    return this.http.request('DELETE', this.baseUrl, { body, headers });
  }
  
}
