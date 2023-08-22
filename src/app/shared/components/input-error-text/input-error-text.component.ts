import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DATA_TOKEN } from '../../directives/humanized-form-error.directive';

@Component({
  selector: 'input-error-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-error-text.component.html',
  styleUrls: ['./input-error-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputErrorTextComponent {
  public errorText = ''

  constructor(@Inject(DATA_TOKEN) private data: string) {
    this.errorText = data;
  }
}
