import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadesCentroService {
  private apiUrl = 'http://localhost/api/unidades-centro.php';

  constructor(private http: HttpClient) {}

  getUnidadesCentro(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getUnidadCentroById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?id=${id}`);
  }

  addUnidadCentro(unidad: any): Observable<any> {
    return this.http.post(this.apiUrl, unidad);
  }

  updateUnidadCentro(id: number, unidad: any): Observable<any> {
    return this.http.put(`${this.apiUrl}?id=${id}`, unidad);
  }

  deleteUnidadCentro(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
