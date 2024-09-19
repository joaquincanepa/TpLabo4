import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { HeaderComponent } from './componentes/header/header.component';
import { CommonModule } from '@angular/common';  
import { RegisterComponent } from './componentes/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, LoginComponent, HomeComponent, ReactiveFormsModule,HeaderComponent,CommonModule,RegisterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sala-de-juegos';

  constructor(private router: Router) 
  {}
  goTo(path: string) {
    this.router.navigate([path]);
  }
}
