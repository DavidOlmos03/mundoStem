
import { Component } from '@angular/core';



@Component({
  selector: 'app-books-grid',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksGridComponent {
  /**
   * Para el contenedor lateral
   */
  lateralVisible:boolean = true;
  toggleLateral(): void {
    this.lateralVisible = !this.lateralVisible;
  }

}
