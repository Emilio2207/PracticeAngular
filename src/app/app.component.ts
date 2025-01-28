import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` <h1>Hola mundo desde {{ city.toUpperCase() }}</h1> `,
  styles: `
  h1{
    color: red;
  }
  `,
})
export class AppComponent {
  city = 'Córdoba';
}
