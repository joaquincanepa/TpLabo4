import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  newUserMail: string = "";
  newUserPWD: string = "";
  loggedUser: string = "";

  showPassword: boolean = false; 

  constructor(private authService: AuthService, private router: Router) { }

  Register() {
    this.authService.register(this.newUserMail, this.newUserPWD)
      .then((res) => {
        if (res.user.email !== null) {
          this.loggedUser = res.user.email;
          Swal.fire({
            title: '¡Registro exitoso!',
            text: `Bienvenido, ${this.loggedUser}!`,
            icon: 'success',
            confirmButtonText: 'Aceptar'
          }).then(() => {
            this.router.navigate(['/home']);
          });
        }
      })
      .catch((e) => {
        let errorMessage = '';
        switch (e.code) {
          case "auth/invalid-email":
            errorMessage = "Email inválido";
            break;
          case "auth/email-already-in-use":
            errorMessage = "Email ya en uso";
            break;
          case "auth/weak-password":
            errorMessage = "La contraseña es muy débil";
            break;
          default:
            errorMessage = e.code;
            break;
        }
        Swal.fire({
          title: 'Error al registrarse',
          text: errorMessage,
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      });
  }
}
