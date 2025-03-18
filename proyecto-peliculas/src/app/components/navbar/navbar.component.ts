import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchText = '';
  isLoggedIn = false;
  userName: string | null = null;

  constructor(
    private searchService: SearchService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isLoggedIn = isAuth;
      if (isAuth) {
        const userData = localStorage.getItem('usuario');
        if (userData) {
          this.userName = JSON.parse(userData).nombre_publico;
        }
      } else {
        this.userName = null;
      }
    });

    this.isLoggedIn = this.authService.isLoggedIn();
    if (this.isLoggedIn) {
      const userData = localStorage.getItem('usuario');
      if (userData) {
        this.userName = JSON.parse(userData).nombre_publico;
      }
    }
  }

  onSearchClick(): void {
    const value = this.searchText.trim();
  
    if (value) {
      if (this.router.url !== '/') {
        this.router.navigate(['/']).then(() => {
          this.searchService.setSearchTerm(value);
        });
      } else {
        this.searchService.setSearchTerm(value);
      }
    }
  }

  iniciarSesion(): void {
    this.router.navigate(['/login']);
  }

  cerrarSesion(): void {
    this.authService.logout();
    this.router.navigate(['/']).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  }
}
