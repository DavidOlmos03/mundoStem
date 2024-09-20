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
export class EditBookComponent {
  private readonly dialogs = inject(TuiDialogService);
  private readonly context = injectContext<TuiDialogContext<number, number>>();

  protected value: number | null = null;
  protected name = '';
  protected items = [10, 50, 100];

  protected get hasValue(): boolean {
      return this.value !== null;
  }

  protected get data(): number {
      return this.context.data;
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
