import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UnidadesCentroService {
  private apiUrl = `${URL_API}/unidades_centro.php`;

  constructor(private http: HttpClient) {}

  getUnidadesCentro(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  createUnidadCentro(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  updateUnidadCentro(data: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, data);
  }

  deleteUnidadCentro(id: number): Observable<any> {
    return this.http.request<any>('DELETE', this.apiUrl, { body: { id_unidad_centro: id } });
  }
}
