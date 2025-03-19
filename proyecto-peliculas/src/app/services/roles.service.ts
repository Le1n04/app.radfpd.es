import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/environments/environment';
import { CommonService } from './common.service';
import { Rol } from '../models/rol';
import { Observable } from 'rxjs';
import { ApiResponse } from './api-response';

const ENDPOINT = 'rol';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  roles: Rol[] = [];

  constructor(private http: HttpClient, private commonService: CommonService) {
  }

  getAllRoles(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`http://143.47.52.177/api/private/rol.php`, { headers: this.commonService.headers });
  }

  addRol(rol: Rol) {
    const body = JSON.stringify(rol);
    return this.http.post<ApiResponse>(`http://143.47.52.177/api/private/rol.php`, body, { headers: this.commonService.headers });
  }

  editRol(rol: Rol) {
    const body = JSON.stringify(rol);
    return this.http.put<ApiResponse>(`http://143.47.52.177/api/private/rol.php`, body, { headers: this.commonService.headers });
  }

  deleteRol(idRol: string | number) {
    return this.http.delete<ApiResponse>(`http://143.47.52.177/api/private/rol.php?id=${idRol}`, { headers: this.commonService.headers });
  }

  removeRol(idRol: number) {
    this.roles = this.roles.filter(rol => {
      return Number(rol.id_rol) !== Number(idRol);
    });
  }

  updateRol(rol: Rol) {
    let index = null;
    this.roles.filter((rolFilter, indexFilter) => {
      if (rol.id_rol === rolFilter.id_rol) {
        index = indexFilter;
      }
    });

    if (index) {
      this.roles[index] = rol;
    }
  }

}
