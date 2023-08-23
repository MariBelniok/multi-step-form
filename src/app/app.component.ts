import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { StepperComponent, StepperStep } from './shared/components/stepper/stepper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepperComponent, PersonalInfoComponent],
})
export class AppComponent {
  public readonly steps: StepperStep[] = [
    { label: 'Personal Info' },
    { label: 'Select Plan' },
    { label: 'Add-ons' },
    { label: 'Summary' },
  ];

  public currentStep = signal(0);

  public onCurrentStepChanged(step: number) {}
}
