import { Injectable, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({providedIn: 'root'})
export class AppFormService {
  public fb = inject(FormBuilder);

  public personalInfoForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^(\+\d\s)(\d{3}\s){2}(\d{3})$/g)]],
  });
}
