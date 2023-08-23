import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperButtonsComponent } from './stepper-buttons.component';

describe('StepperButtonsComponent', () => {
  let component: StepperButtonsComponent;
  let fixture: ComponentFixture<StepperButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StepperButtonsComponent]
    });
    fixture = TestBed.createComponent(StepperButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
