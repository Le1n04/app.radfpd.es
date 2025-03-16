import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() searchEvent = new EventEmitter<string>();

  searchText = '';

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value.trim();
    if (value) {
      this.searchEvent.emit(value);
    }
  }
    
}
