import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CDFlashingDirective,
    MatFormField,
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  template: `
    <mat-form-field class="w-4/5" cd-flash>
      <input
        placeholder="Add one member to the list"
        matInput
        type="text"
        [(ngModel)]="label"
        (input)="labelChange.emit(this.label)"
        (keydown)="handleKey.emit($event)" />
    </mat-form-field>
  `,
})
export class SearchComponent {
  @Input() label = '';
  @Output() labelChange = new EventEmitter<string>();
  @Output() handleKey = new EventEmitter<KeyboardEvent>();
}
