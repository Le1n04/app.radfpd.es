import { Component } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchText = '';

  constructor(private searchService: SearchService, private router: Router) {}

  onSearchClick(): void {
    const value = this.searchText.trim();
    if (value) {
      this.searchService.setSearchTerm(value);
    }
  }

  iniciarSesion(): void {
    this.router.navigate(['/login']);
  }
}
