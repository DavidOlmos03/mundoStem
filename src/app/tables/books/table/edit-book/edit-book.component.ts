import {AsyncPipe} from '@angular/common';
import type {TemplateRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiButton, TuiDialogService, TuiTextfield} from '@taiga-ui/core';
import {TuiDataListWrapper, TuiSlider} from '@taiga-ui/kit';
import {
    TuiInputModule,
    TuiSelectModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {injectContext} from '@taiga-ui/polymorpheus';
import { BookBase } from 'src/app/core/models/book.model';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    TuiAmountPipe,
    TuiAutoFocus,
    TuiButton,
    TuiDataListWrapper,
    TuiInputModule,
    TuiSelectModule,
    TuiSlider,
    TuiTextfield,
    TuiTextfieldControllerModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent{
  //dataBook = this.data
  constructor(){
    //console.log(this.data);
    
  }
  private readonly dialogs = inject(TuiDialogService);
  private readonly context = injectContext<TuiDialogContext<number, number>>();
  
  protected value: number | null = null;
  protected title = this.bookData.title;
  protected language = this.bookData.language;
  protected authors = this.bookData.authors;
  protected pages = this.bookData.pages;
  protected subject = this.bookData.subject;
  protected topic = this.bookData.topic;
  protected extension = this.bookData.extension;
  protected size = this.bookData.size;
  protected summary = this.bookData.summary;

  protected subjects = ['1. mathematics', '2. physics', '3. programming'];
  protected topicsMath = ['1. mathematics', '2. physics', '3. programming'];
  

  protected get hasValue(): boolean {
      return this.value !== null;
  }

  protected get data(): Object {
      return this.context.data;
  }

  protected get bookData(): BookBase {
    const bookData = this.data as BookBase; 
    return bookData
  }
  
  protected submit(): void {
      if (this.value !== null) {
          this.context.completeWith(this.value);
      }
  }

  protected showDialog(content: TemplateRef<TuiDialogContext>): void {
      this.dialogs.open(content, {dismissible: true}).subscribe();
  }
  
}
