import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { BooksGridComponent } from './books/books.component';
import { TableComponent } from './books/table/table.component';

import { AgGridAngular  } from 'ag-grid-angular';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    BooksGridComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AgGridAngular,
    SharedModule,
    TablesRoutingModule
  ]
})
export class TablesModule { }
