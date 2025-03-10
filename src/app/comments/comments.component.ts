import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

//-------------------------------------------------------------------

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img
      src="https://media.npr.org/assets/img/2023/01/14/this-is-fine_custom-dcb93e90c4e1548ffb16978a5a8d182270c872a9.jpg"
    />
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta
      gravida erat, ac porttitor ante consequat id. Morbi ligula nisl,
      vestibulum et auctor sit amet, blandit dignissim purus. Integer in neque
      nisl.
    </p>
  `,
  styles: `
  img{
    width: 100%;
    height: auto;
  }
  `,
})
export class CommentsComponent {}
