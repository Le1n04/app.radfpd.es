import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://143.47.52.177/api/private/login.php';

  private isAuthenticated = new BehaviorSubject<boolean>(this.hasToken());
  public isAuthenticated$ = this.isAuthenticated.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.isAuthenticated.next(true);
    }
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<{ token: string }>(this.apiUrl, body, { headers }).pipe(
      tap(response => {
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.isAuthenticated.next(true);
        } else {
          this.logout();
        }
      })      
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticated.next(false);
  }

  setAuthenticated(isAuth: boolean): void {
    this.isAuthenticated.next(isAuth);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }
}
