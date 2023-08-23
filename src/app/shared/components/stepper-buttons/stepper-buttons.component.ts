import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'stepper-buttons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-buttons.component.html',
  styleUrls: ['./stepper-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StepperButtonsComponent {
  @Input({ required: true })
  public isFirstStep = false;

  @Input({ required: true })
  public isLastStep = false;

  @Output()
  public onPrevious = new EventEmitter();

  @Output()
  public onNext = new EventEmitter();
}
