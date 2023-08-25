import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PAYMENT_FREQUENCY, PLAN } from './plan/plan.component';

@Injectable({providedIn: 'root'})
export class AppFormService {
  public fb = inject(FormBuilder);

  public personalInfoForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });

  public planForm = this.fb.group({
    plan: PLAN.arcade,
    monthlyPayment: false,
  });
}
