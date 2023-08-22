import { CdkPortalOutlet, ComponentPortal } from '@angular/cdk/portal';
import { AfterViewInit, DestroyRef, Directive, InjectionToken, Injector, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs';
import { InputErrorTextComponent } from '../components/input-error-text/input-error-text.component';
import { FORM_ERRORS } from '../constants/form-errors';

export const DATA_TOKEN = new InjectionToken<string>('portal-data');

@Directive({
  selector: '[formControl]',
  standalone: true,
})
export class HumanizedFormErrorDirective extends CdkPortalOutlet implements AfterViewInit {
  private control = inject(NgControl);
  private errors = inject(FORM_ERRORS) as any;
  private destroyRef = inject(DestroyRef);
  private componentPortal!: ComponentPortal<InputErrorTextComponent>;

  public ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(InputErrorTextComponent);

    this.control.valueChanges
      ?.pipe(
        distinctUntilChanged(),
        takeUntilDestroyed(this.destroyRef)
      ).subscribe(
        () => {
          const controlErrors = this.control.errors;
          if (controlErrors) {
            const firstKey = Object.keys(controlErrors)[0];
            const getErrors = this.errors[firstKey];
            const text = getErrors(controlErrors[firstKey]);
            this.displayError(text);
          } else if (this.componentPortal.isAttached) {
            this.detach();
          }
        },
      );
  }

  private displayError(text: string): void {
    const portalInjector = Injector.create({
      providers: [{ provide: DATA_TOKEN, useValue: text }],
    });
    this.componentPortal.injector = portalInjector;

    if (!this.componentPortal.isAttached && text) {
      this.attachComponentPortal(this.componentPortal);
    }
  }
}
