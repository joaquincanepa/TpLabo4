import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  logged = false;
  emailUsuario = "";
  nombreUsuario="";

  constructor( private  authService: AuthService,private snackbar: MatSnackBar,) {
   }

  ngOnInit(): void {
    this.obtenerUsuarioLoggeado();
  }

  obtenerUsuarioLoggeado(){
    this.authService.getCurrentUser().subscribe(user => {
      console.log(user?.email);
      if (user?.email != null) {
        this.logged = true; 
        this.emailUsuario = user.email;
      } else this.logged = false;
    })
  }

  logout(){
    this.authService.logout();
    this.logged = false;
    this.snackbar.open("Saliendo...", 'Cerrar',{
      duration:3000
    });
  }

}