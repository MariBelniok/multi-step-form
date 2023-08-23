import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';

export interface StepperStep {
  label: string;
}

@Component({
  selector: 'stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class StepperComponent {
  @Input({ required: true })
  public steps: StepperStep[] = [];

  @Input({ required: true })
  public currentStep = 0;

  @Output()
  public currentStepChanged = new EventEmitter();

  public onStep(index: number): void {
    this.currentStepChanged.emit(index);
  }
}
