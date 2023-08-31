import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  computed,
  inject,
  signal,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import {
  StepperComponent,
  StepperStep,
} from './shared/components/stepper/stepper.component';
import { StepperButtonsComponent } from './shared/components/stepper-buttons/stepper-buttons.component';
import { PlanComponent } from './plan/plan.component';
import { SwitchInputComponent } from './shared/components/switch-input/switch-input.component';
import { AppFormService } from './app-form.service';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { SummaryComponent } from './summary/summary.component';
import { CommonModule } from '@angular/common';

enum FORM_STEP {
  personalInfo,
  selectPlan,
  addOns,
  summary,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    AddOnsComponent,
    CommonModule,
    PersonalInfoComponent,
    PlanComponent,
    StepperButtonsComponent,
    StepperComponent,
    SummaryComponent,
  ],
})
export class AppComponent {
  public readonly steps = new Map([
    [
      FORM_STEP.personalInfo,
      {
        label: 'Personal Info',
        description: 'Please provide your name, email address, and phone number. ',
      },
    ],
    [
      FORM_STEP.selectPlan,
      {
        label: 'Select Plan',
        description: 'You have the option of monthly or yearly billing. ',
      },
    ],
    [
      FORM_STEP.addOns,
      {
        label: 'Add-ons',
        description: 'Add-ons help enhance your gaming experience.',
      },
    ],
    [
      FORM_STEP.summary,
      {
        label: 'Summary',
        description: 'Double-check everything looks OK before confirming.',
      },
    ],
  ]);

  public readonly stepsLabels: StepperStep[] = Array.from(this.steps.values()).map(({ label }) => ({
    label,
  }));

  public FORM_STEP = FORM_STEP;

  public currentStep = signal(FORM_STEP.personalInfo);

  public currentStepDetails = computed(() => this.steps.get(this.currentStep()))

  public onCurrentStepChanged(direction: 'next' | 'previous') {
    this.currentStep.update((currentStep) =>
      direction === 'next' ? currentStep + 1 : currentStep - 1
    );
  }
}
