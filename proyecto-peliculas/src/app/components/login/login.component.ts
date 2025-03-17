import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = '';
  password = '';
  showPassword = false;
  emailInvalid = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  onEmailChange(): void {
    this.emailInvalid = !this.emailRegex.test(this.email);

    if (!this.emailInvalid) {
      setTimeout(() => {
        this.showPassword = true;
      }, 500);
    } else {
      this.showPassword = false;
    }
  }

  onSubmit(): void {
  if (this.email && this.password) {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Respuesta del backend:', response);

        if (response.data?.valido === 1) {
          if (response.data?.token) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data));
            this.authService.setAuthenticated(true);
          }

          console.log('Login correcto');
          this.router.navigate(['/buscar']).then(() => {
            window.location.reload(); // ✅ Recarga para actualizar estado
          });
        } else {
          this.errorMessage = 'Credenciales incorrectas.';
          setTimeout(() => {
            this.errorMessage = '';
          }, 3000);
        }
      },
      error: (error) => {
        console.error('Error en el login:', error);
        this.errorMessage = 'Error al conectar con el servidor.';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    });
  }
}

}
