/**
 * El primer component que maneja caracteristicas de la tabla como los botones
 */
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import {
  ICellRendererParams,
  ValueGetterParams,
} from 'ag-grid-community';
import { BookService } from '../../../core/services/book.service'




@Component({
  selector: 'app-custom-button',
  standalone: true,
  styleUrls: ['./table.component.css'],
  template: `<button id="editButton" (click)="buttonEdit()"><i class="fa-solid fa-pencil"></i></button>

  <button id="deteleButton" (click)="buttonDelete()"><i class="fas fa-trash-alt"></i></button>`
})
export class CustomButtonComponent implements ICellRendererAngularComp {

  agInit(params: ICellRendererParams): void {}
  refresh(params: ICellRendererParams) {
    return true;
  }
  /**
   * OBS. revisar documentación de ag gred a ver si puedo hacer el delete y el edit con esa herramienta, si no buscar en alguna IA
   * como obtener este id de ag grid
   */
  buttonDelete() {
   /**
    * Se hace lee el id de la tabla y se hace la solicitud al backend para eliminar el registro con este id
    *  */
    alert('clicked delete');
  }
  buttonEdit() {
    /**
    * Se hace lee el id de la tabla y se hace la solicitud al backend para editar el registro con este id
    *  */
    alert('clicked edit');
  }
}


/***
 * El segundo component que se encarga de la estructura de la tabla
 */
import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColDef, GridOptions} from 'ag-grid-community';
import { window } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnChanges{
  /**
   * Se maneja la tabla con ag grid
   */
  gridOptions: GridOptions;
  rowData: any[] = [];
  public paginationPageSize = 10;
  public paginationPageSizeSelector: number[] | boolean = [10, 20, 50];

  constructor(
    private http: HttpClient,
    private BookService:BookService,
    //private gridApi: GridApi
  ) {
    this.gridOptions = {
      columnDefs: [
        //{ headerName: 'ID', field: 'id', filter:  'agNumberColumnFilter', width:70},
        {
          headerName: 'Title',
          field: 'title',
          filter:  'agTextColumnFilter',
          width:180,
          autoHeight:true,
          cellStyle:{whiteSpace:'normal'},
          editable:true
        },
        {
          headerName: 'Authors',
          field: 'authors',
          filter:  'agTextColumnFilter' ,
          width:150 ,
          minWidth:100,
          maxWidth:150,
          autoHeight:true,
          cellStyle:{whiteSpace:'normal'},
          editable:true
        },
        { headerName: 'Language',
        field: 'language',
        filter:  'agTextColumnFilter',
        width:120 ,
        minWidth:80,
        maxWidth:120,
        autoHeight:true,
        cellStyle:{whiteSpace:'normal'}
      },
        { headerName: 'Topic',
        field: 'topic',
        filter:  'agNumberColumnFilter',
        width:100 ,
        minWidth:100,
        maxWidth:100,
        autoHeight:true,
        cellStyle:{whiteSpace:'normal'}
      },
      { headerName: 'Subject',
        field: 'subject',
        filter:  'agNumberColumnFilter',
        width:100 ,
        minWidth:100,
        maxWidth:100,
        autoHeight:true,
        cellStyle:{whiteSpace:'normal'}
      },
        {
          headerName: 'Pages',
          field: 'pages',
          filter:  'agNumberColumnFilter',
          width:100 ,
          minWidth:100,
          maxWidth:100,
          autoHeight:true,
          cellStyle:{whiteSpace:'normal'}
        },
        { headerName: 'Extension',
        field: 'extension',
        filter:  'agTextColumnFilter',
        width:110 ,
        minWidth:90,
        maxWidth:110,
        autoHeight:true,
        cellStyle:{whiteSpace:'normal'}
      },
        {
          headerName: 'Size',
          field: 'size',
          filter:  'agNumberColumnFilter',
          minWidth:90,
          maxWidth:90,
          autoHeight:true,
          cellStyle:{whiteSpace:'normal'}
        },
        {
          headerName: 'Summary',
          field: 'summary',
          filter:  'agTextColumnFilter',
          minWidth:310,
          maxWidth:500,
          autoHeight:true,
          cellStyle:{whiteSpace:'normal'},
          editable:true
        },
        {
          headerName: 'Actions',
          cellRenderer: CustomButtonComponent,
          flex:1
        },
      ],
      domLayout:'autoHeight'
    };
    this.loadData();
  }

  /**
   * Para manejar el cargue dinamico de la tabla
   */
  //aqui no se esta actualizando
  @Input() subjectId: number = 1
  @Input() topicId: number = 1
  //tableToShow:number = this.topicId
  
  ngOnChanges(changes: SimpleChanges):void {
    console.log(this.subjectId,this.topicId)
    if ('subjectId' in changes) {
      console.log('subjectId cambió:', this.subjectId);
      this.loadData();
    }
    if ('topicId' in changes) {
      console.log('topicId cambió:', this.topicId);
      //this.tableToShow = changes['topicId'].currentValue;
      this.loadData();
    }
  
    console.log("subject y topic en table",this.subjectId, this.topicId)
    /*
    if ('topicId' in changes || 'subjectId' in changes) {
      const filterModel = {
        subjectId: { filter: this.subjectId, filterType: 'number' },
        topicId: { filter: this.topicId, filterType: 'number' }
      };
      this.gridApi.setFilterModel(filterModel);
      this.loadData();

    }*/
  }
  /**
   * Función para hacer la consulta a la API
   */
  loadData() {
    this.BookService.getBooksBySubjectAndTopic(this.subjectId, this.topicId)
    .subscribe(data=>{

      console.log(data)
      this.rowData = data;
    },error=>{
      console.log(error)
    })
  }



}
