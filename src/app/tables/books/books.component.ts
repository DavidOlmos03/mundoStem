
import { Component, EventEmitter, Output } from '@angular/core';



@Component({
  selector: 'app-books-grid',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksGridComponent {
  /**
   * Para el contenedor lateral
   */
  @Output() tableNameChange = new EventEmitter<string>();
  tableName:string='mechanics_books'
  tableNameTitle:string="Mecánica"
  enterTableName(tableNameIntro:string){
    this.tableName = tableNameIntro
    this.tableNameChange.emit(this.tableName)
    if(this.tableName == 'mechanics_books'){
      this.tableNameTitle = "Mecánica"
    }else if(this.tableName == 'electromagnetism_books'){
      this.tableNameTitle = "Electromagnetismo"
    }
  }

  /**
   * Para controlar el titulo del header
   */

  /*
  lateralVisible:boolean = true;
  toggleLateral(): void {
    this.lateralVisible = !this.lateralVisible;
  }
   */


}
