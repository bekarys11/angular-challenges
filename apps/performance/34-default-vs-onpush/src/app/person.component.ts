import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListItemLine, MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatListItemLine, MatListModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-list-item cd-flash class="text-orange-500">
      <div MatListItemLine class="flex justify-between">
        <h3 title="Name">
          {{ name }}
        </h3>
      </div>
    </mat-list-item>
  `,
})
export class PersonComponent {
  @Input() name = '';
}
