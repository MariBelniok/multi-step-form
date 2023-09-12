import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PLAN } from './plan/plan.component';
import { ADD_ON } from './add-ons/add-ons.component';

@Injectable({ providedIn: 'root' })
export class AppFormService {
  public fb = inject(FormBuilder);

  public personalInfoForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });

  public planForm = this.fb.group({
    plan: PLAN.arcade,
    yearlyPayment: false,
  });

  public addOnsForm = this.fb.group({
    [ADD_ON.onlineServices]: false,
    [ADD_ON.largerStorage]: false,
    [ADD_ON.customizableProfile]: false,
  });
}
