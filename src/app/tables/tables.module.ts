import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BooksGridComponent } from './books/books.component';

import { AgGridAngular  } from 'ag-grid-angular';
import { TableComponent } from './books/table/table.component';

@NgModule({
  declarations: [
    BooksGridComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    SharedModule
  ]
})
export class TablesModule { }
