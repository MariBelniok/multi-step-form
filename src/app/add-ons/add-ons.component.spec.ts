import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOnsComponent } from './add-ons.component';

describe('AddOnsComponent', () => {
  let component: AddOnsComponent;
  let fixture: ComponentFixture<AddOnsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AddOnsComponent]
    });
    fixture = TestBed.createComponent(AddOnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
