import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PLAN } from './plan/plan.component';

@Injectable({providedIn: 'root'})
export class AppFormService {
  public fb = inject(FormBuilder);

  public personalInfoForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
  });

  public planControl = this.fb.control(PLAN.arcade);
}
