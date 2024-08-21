import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListItemLine } from '@angular/material/list';

@Component({
  selector: 'app-person',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, MatListItemLine],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div MatListItemLine class="flex justify-between">
      <h3 title="Name">
        {{ name }}
      </h3>
    </div>
  `,
})
export class PersonComponent {
  @Input() name = '';
}
