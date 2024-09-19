import { Component,AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.scss'
})
export class QuienSoyComponent {
  ngAfterViewInit(): void {
    console.log("quien-soy");
   }
}
