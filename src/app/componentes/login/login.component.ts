import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addDoc, collection, collectionData, Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private router: Router, private auth: AuthService) { }

  credenciales = { email: '', password: '' }
  defaultEmail = 'prueba1@gmail.com';
  defaultPassword = 'prueba123456';

  async login() {
    try {
      await this.auth.login(this.credenciales.email, this.credenciales.password);
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500
      });
      this.router.navigate(['home']);
    } catch (error: any) {
      if (error.code !== 'auth/invalid-email') {
        console.error('Error al iniciar sesión', error);
      }
      let errorMessage = 'Credenciales incorrectas';
      if (error.code === 'auth/invalid-email') {
        errorMessage = 'Correo electrónico inválido';
      }
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: errorMessage,
        timer: 1500
      });
    }
  }

  
  loginLoad() {
    this.credenciales.email = 'prueba1@gmail.com';
    this.credenciales.password = 'prueba123456';
  }
  
  
  register() {
    this.router.navigate(['register']);
  }

}

    
    