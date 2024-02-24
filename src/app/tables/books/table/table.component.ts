/**
 * Para el primer component que maneja caracteristicas de la tabla como los botones
 */
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  ValueGetterParams,
} from 'ag-grid-community';

/***
 * Para el segundo component que se encarga de la estructura de la tabla
 */
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions } from 'ag-grid-community';


@Component({
  selector: 'app-custom-button',
  standalone: true,
  styleUrls: ['./table.component.css'],
  template: `<button id="editButton" (click)="buttonClicked()"><i class="fa-solid fa-pencil"></i></button>
  <button id="deteleButton" (click)="buttonClicked()"><i class="fas fa-trash-alt"></i></button>`
})
export class CustomButtonComponent implements ICellRendererAngularComp {
  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  buttonClicked() {
    alert('clicked');
  }
}


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  gridOptions: GridOptions;
  rowData: any[] = [];
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 20, 50];

  constructor(private http: HttpClient) {
    this.gridOptions = {
      columnDefs: [
        //{ headerName: 'ID', field: 'id', filter:  'agNumberColumnFilter', width:70},
        { headerName: 'Title', field: 'title', filter:  'agTextColumnFilter',width:180, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Authors', field: 'authors', filter:  'agTextColumnFilter' , width:150 ,minWidth:100,maxWidth:150, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Language', field: 'language', filter:  'agTextColumnFilter',width:120 ,minWidth:80,maxWidth:120, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Subject', field: 'subject', filter:  'agTextColumnFilter',width:100 ,minWidth:100,maxWidth:100, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Pages', field: 'pages', filter:  'agNumberColumnFilter',width:100 ,minWidth:100,maxWidth:100, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Extension', field: 'extension', filter:  'agTextColumnFilter',width:110 ,minWidth:90,maxWidth:110, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Size', field: 'size', filter:  'agNumberColumnFilter',minWidth:100,maxWidth:100, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Summary', field: 'summary', filter:  'agTextColumnFilter', minWidth:310,maxWidth:500, autoHeight:true, cellStyle:{whiteSpace:'normal'}},
        { headerName: 'Actions',  cellRenderer: CustomButtonComponent,flex:1 },
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
