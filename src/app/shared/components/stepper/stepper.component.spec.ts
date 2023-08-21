import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperComponent } from './stepper.component';
import { ChangeDetectionStrategy } from '@angular/core';
import { onPushDetectChanges } from '../../tests/utils';
import { By } from '@angular/platform-browser';

describe('StepperComponent', () => {
  let component: StepperComponent;
  let fixture: ComponentFixture<StepperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [StepperComponent] })
      .overrideComponent(
        StepperComponent,
        { set: { changeDetection: ChangeDetectionStrategy.OnPush } },
      )
      .compileComponents();
    fixture = TestBed.createComponent(StepperComponent);
    component = fixture.componentInstance;
    onPushDetectChanges(fixture);
  });

  it('should update the current step when other step button is clicked', () => {
    const spy = spyOn(component.currentStepChanged, 'emit');
    component.steps = [{ label: 'Step 1' }, { label: 'Step 2' }];
    component.onStep(1);
    expect(component.currentStep()).toBe(1);
    expect(spy).toHaveBeenCalledWith(1);
  });

  it('should change the button style when is selected', () => {
    component.steps = [{ label: 'Step 1' }, { label: 'Step 2' }];
    onPushDetectChanges(fixture);
    component.onStep(1);
    const button = fixture.nativeElement.querySelector('button');
    expect(button.classList).toContain('selected');
  });
});
