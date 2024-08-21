import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListItemLine, MatListModule } from '@angular/material/list';
import { PersonComponent } from './person.component';
import { SearchComponent } from './search.component';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    CDFlashingDirective,
    PersonComponent,
    SearchComponent,
    MatListItemLine,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 cd-flash class="text-center font-semibold" title="Title">
      {{ title | titlecase }}
    </h1>

    <app-search
      (label)="(label)"
      (labelChange)="label = $event"
      (handleKey)="handleKey($event)" />

    <mat-list class="flex w-full">
      <div *ngIf="names?.length === 0" class="empty-list-label">Empty list</div>

      @for (name of names; track name) {
        <app-person [name]="name" />
        <mat-divider *ngIf="names?.length !== 0"></mat-divider>
      }
    </mat-list>
  `,
  host: {
    class: 'w-full flex flex-col items-center',
  },
})
export class PersonListComponent {
  @Input() names: string[] = [];
  @Input() title = '';

  label = '';

  handleKey(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.names?.unshift(this.label);
      this.label = '';
    }
  }
}
