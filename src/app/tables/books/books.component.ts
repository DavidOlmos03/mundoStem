
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-books-grid',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksGridComponent {

  gridOptions: GridOptions;
  rowData: any[] = [];

  constructor(private http: HttpClient) {
    this.gridOptions = {
      columnDefs: [
        //{ headerName: 'ID', field: 'id', filter:  'agNumberColumnFilter', width:70},
        { headerName: 'Title', field: 'title', filter:  'agTextColumnFilter'},
        { headerName: 'Authors', field: 'authors', filter:  'agTextColumnFilter'},
        { headerName: 'Language', field: 'language', filter:  'agTextColumnFilter', width:120},
        { headerName: 'Subject', field: 'subject', filter:  'agTextColumnFilter', width:100},
        { headerName: 'Pages', field: 'pages', filter:  'agNumberColumnFilter', width:100},
        { headerName: 'Extension', field: 'extension', filter:  'agTextColumnFilter', width:100},
        { headerName: 'Size', field: 'size', filter:  'agNumberColumnFilter', width:100},
        { headerName: 'Summary', field: 'summary', filter:  'agTextColumnFilter', autoHeight:true, minWidth: 300, cellStyle: {whiteSpace: 'normal'}}
      ],
      domLayout:'autoHeight'
    };
    this.loadData();
  }

  loadData() {
    this.http.get<any[]>('http://localhost:8000/api/books').subscribe(data => {
      this.rowData = data;
    });
  }
}
