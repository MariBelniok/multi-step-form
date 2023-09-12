import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  signal
} from '@angular/core';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { PlanComponent } from './plan/plan.component';
import { StepperButtonsComponent } from './shared/components/stepper-buttons/stepper-buttons.component';
import {
  StepperComponent,
  StepperStep,
} from './shared/components/stepper/stepper.component';
import { SummaryComponent } from './summary/summary.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
import { AppFormService } from './app-form.service';

enum FORM_STEP {
  personalInfo,
  selectPlan,
  addOns,
  summary,
  thankYou,
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
    ThankYouComponent,
  ],
})
export class AppComponent {
  private form = inject(AppFormService);

  public readonly steps = new Map([
    [
      FORM_STEP.personalInfo,
      {
        label: 'Personal Info',
        description: 'Please provide your name, email address, and phone number.',
        form: this.form.personalInfoForm,
      },
    ],
    [
      FORM_STEP.selectPlan,
      {
        label: 'Select Plan',
        description: 'You have the option of monthly or yearly billing.',
        form: this.form.planForm,
      },
    ],
    [
      FORM_STEP.addOns,
      {
        label: 'Add-ons',
        description: 'Add-ons help enhance your gaming experience.',
        form: this.form.addOnsForm,
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

  public isFormValid(): boolean {
    const stepForm = this.steps.get(this.currentStep())?.form ?? null;

    if(!stepForm) {
      return true;
    }

    stepForm?.updateValueAndValidity();

    return stepForm.valid;
  }

  public onCurrentStepChanged(direction: 'next' | 'previous') {
    let currentStep = this.currentStep();

    if (this.isFormValid() &&
        (currentStep >= FORM_STEP.personalInfo || currentStep <= FORM_STEP.thankYou)
      ) {
      this.currentStep.update((currentStep) =>
        direction === 'next'
          ? currentStep + 1
          : currentStep - 1
      );
    }
  }
}
