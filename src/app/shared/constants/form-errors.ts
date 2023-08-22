import { InjectionToken } from '@angular/core';

export const defaultErrors = {
  required: () => `This field is required`,
  email: () => `This email is invalid`,
  pattern: ({ requiredPattern }: any) => `This field must follow pattern ${requiredPattern}`,
}

export const FORM_ERRORS = new InjectionToken('FORM_ERRORS', {
  providedIn: 'root',
  factory: () => defaultErrors
});
