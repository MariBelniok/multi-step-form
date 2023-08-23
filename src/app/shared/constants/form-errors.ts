import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: () => `This field is required`,
  email: () => `This email is invalid`,
  pattern: () => `This field must follow the pattern`,
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
