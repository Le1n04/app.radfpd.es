import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/environments/environment';
import { CommonService } from './common.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const ENDPOINT = 'favoritos';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  private baseUrl = `${URL_API}/${ENDPOINT}`;

  constructor(private http: HttpClient, private commonService: CommonService) {
    console.log('Base URL:', this.baseUrl);
  }

  getFavoritos(): Observable<any> {
    return this.http.get(this.baseUrl, { headers: this.commonService.headers }).pipe(
      tap(res => console.log('Favoritos recibidos:', res))
    );
  }

  addFavorito(pelicula: any): Observable<any> {
    const body = JSON.stringify(pelicula);
    return this.http.post(this.baseUrl, body, { headers: this.commonService.headers }).pipe(
      tap(res => console.log('Película añadida a favoritos:', res))
    );
  }

  deleteFavorito(idPelicula: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}?id=${idPelicula}`, { headers: this.commonService.headers }).pipe(
      tap(res => console.log('Película eliminada de favoritos:', res))
    );
  }
}
