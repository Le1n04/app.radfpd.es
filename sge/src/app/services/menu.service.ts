import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from 'src/environments/environment';
import { CommonService } from '../shared/common.service';
import { ApiResponse } from '../shared/interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient, private commonService: CommonService) {

  }

  getMenu() {
    return this.http.get<ApiResponse>(`${URL_API}/navegacion.php`, { headers: this.commonService.headers });
  }
}
