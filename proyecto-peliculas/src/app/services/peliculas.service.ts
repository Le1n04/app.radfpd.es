import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'd6952b6da9550f444bdd8ceb1e3d8aa6';

  constructor(private http: HttpClient) {}

  getPopulares(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}&language=es-ES&page=${page}`);
  }

  buscarPeliculas(query: string, page: number = 1): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&language=es-ES&query=${query}&page=${page}`);
  }

  getDetalle(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=es-ES`);
  }

  getSimilares(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}&language=es-ES`);
  }
  
}
