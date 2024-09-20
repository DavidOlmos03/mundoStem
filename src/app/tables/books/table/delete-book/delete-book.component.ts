import { Component, ChangeDetectionStrategy } from '@angular/core';
import {TuiButton} from '@taiga-ui/core';
import {NgForOf} from '@angular/common';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import type {TuiPopover} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [NgForOf, TuiButton],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteBookComponent {
  protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<void>, boolean>>();
}
