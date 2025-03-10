import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menu: any;
  username: string;
  user_public: string;
  grupo: string;
  vista: string;
  href: string;
  url: string;

  constructor(private menuService: MenuService, private authService: AuthService, private router: Router) {
    this.getMenu();
  }

  ngOnInit() {
    this.username = localStorage.getItem('usuario');
    this.user_public = localStorage.getItem('nombre_publico');
    this.grupo = localStorage.getItem('ultimoGrupo');
    this.vista = localStorage.getItem('ultimaOpcion');
  }

  salir() {
    this.authService.doLogout()
      .subscribe( response => {});
    this.router.navigate(['home']);
  }

  async getMenu() {
    const RESPONSE = await this.menuService.getMenu().toPromise();
    this.menu = RESPONSE.data;
  }

  almacenarGrupo(grupo) {
    localStorage.setItem('ultimoGrupo', grupo);
  }

  actualizarVistaNavbar(opcion) {
    this.grupo = localStorage.getItem('ultimoGrupo');
    localStorage.setItem('ultimaOpcion', opcion);
    this.vista = opcion;
  }

  goPerfil() {
    localStorage.setItem('ultimoGrupo', 'Inicio');
    localStorage.setItem('ultimaOpcion', 'Perfil');
    this.router.navigate(['perfil']);
    this.ngOnInit();
  }

}
