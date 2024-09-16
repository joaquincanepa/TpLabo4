import { Component,AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-quien-soy',
  standalone: true,
  imports: [],
  templateUrl: './quien-soy.component.html',
  styleUrl: './quien-soy.component.scss'
})
export class QuienSoyComponent {
  ngAfterViewInit(): void {
    console.log("quien-soy");
   }
}
