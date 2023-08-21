import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, signal } from '@angular/core';

export interface StepperStep {
  label: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
})
export class StepperComponent {
  @Input({ required: true })
  public steps: StepperStep[] = [];

  @Output()
  public currentStepChanged = new EventEmitter();

  public currentStep = signal(0);

  public onStep(index: number): void {
    this.currentStep.set(index);
    this.currentStepChanged.emit(index);
  }
}
