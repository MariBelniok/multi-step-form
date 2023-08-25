import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { StepperComponent, StepperStep } from './shared/components/stepper/stepper.component';
import { StepperButtonsComponent } from './shared/components/stepper-buttons/stepper-buttons.component';
import { PlanComponent } from './plan/plan.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepperComponent, PersonalInfoComponent, StepperButtonsComponent, PlanComponent],
})
export class AppComponent {
  public readonly steps: StepperStep[] = [
    { label: 'Personal Info' },
    { label: 'Select Plan' },
    { label: 'Add-ons' },
    { label: 'Summary' },
  ];

  public currentStep = signal(0);

  public onCurrentStepChanged(direction: 'next' | 'previous') {
    this.currentStep.update(currentStep =>
      direction === 'next' ? currentStep + 1 : currentStep - 1,
    );
  }
}
