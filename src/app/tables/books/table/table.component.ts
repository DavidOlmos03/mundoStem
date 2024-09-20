/**
 * El primer component que maneja caracteristicas de la tabla como los botones
 */
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import {ChangeDetectionStrategy, inject, INJECTOR} from '@angular/core';
import {
  ICellRendererParams,
  ValueGetterParams,
} from 'ag-grid-community';
import { BookService } from '../../../core/services/book.service'
import {TuiButton, TuiDialogService, TuiAlertService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {NgForOf} from '@angular/common';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import {switchMap, takeUntil} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-button',
  imports: [TuiButton, NgForOf],
  standalone: true,
  styleUrls: ['./table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<button id="editButton" (click)="buttonEdit()"><i class="fa-solid fa-pencil"></i></button>

  <button id="deteleButton" (click)="buttonDelete()"><i class="fas fa-trash-alt"></i></button>`
})
export class CustomButtonComponent implements ICellRendererAngularComp {
  private params: any //Para almacenar los parametros de la fila
  private readonly dialogs = inject(TuiDialogService);
  private readonly injector = inject(INJECTOR);
  
  agInit(params: ICellRendererParams): void {
    this.params = params
  }
  refresh(params: ICellRendererParams) {
    return true;
  }
  /**
   * OBS. revisar documentación de ag gred a ver si puedo hacer el delete y el edit con esa herramienta, si no buscar en alguna IA
   * como obtener este id de ag grid
   */
  private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<boolean>(new PolymorpheusComponent(DeleteBookComponent), {
            label: 'Question',
            appearance: 'error',
            autoClose: 0,
        })
        .pipe(
            switchMap((response) =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );
 
    protected buttonDelete(): void {
        this.notification.subscribe();
    }

  OldButtonDelete() {
   /**
    * Se hace lee el id del libro y se hace la solicitud al backend para eliminar el registro con este id
    *  */
    const bookId = this.params.data.id
    alert('clicked delete '+ bookId);
  }

  private readonly dialogEdit = this.dialogs.open<number>(
    new PolymorpheusComponent(AddBookComponent, this.injector),
    {
        data: 237,
        dismissible: true,
        label: 'Heading',
    },
  );


  protected buttonEdit(): void {
    this.dialogEdit.subscribe({
        next: (data) => {
            console.info(`Dialog emitted data = ${data}`);
        },
        complete: () => {
            console.info('Dialog closed');
        },
    });
  }
}


/***
 * El segundo component que se encarga de la estructura de la tabla
 */
import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GridOptions} from 'ag-grid-community';
import { param } from 'jquery';

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
        cellStyle:{whiteSpace:'normal'},
        hide: true
      },
      { headerName: 'Subject',
        field: 'subject',
        filter:  'agNumberColumnFilter',
        width:100 ,
        minWidth:100,
        maxWidth:100,
        autoHeight:true,
        cellStyle:{whiteSpace:'normal'},
        hide: true
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
  @Input() subjectId: number = 1
  @Input() topicId: number = 1

  ngOnChanges(changes: SimpleChanges):void {
    this.loadData();
  }
  /**
   * Función para hacer la consulta a la API
   */
  loadData() {
    this.BookService.getBooksBySubjectAndTopic(this.subjectId, this.topicId)
    .subscribe(data=>{
      this.rowData = data;
    },error=>{
      console.log(error)
    })
  }



}
