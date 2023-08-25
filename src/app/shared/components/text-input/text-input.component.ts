import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { ControlValueAccessorDirective } from '../../directives/control-value-accessor.directive';
import { HumanizedFormErrorDirective } from '../../directives/humanized-form-error.directive';
import { InputErrorTextComponent } from '../input-error-text/input-error-text.component';

const imports = [
  CommonModule,
  ReactiveFormsModule,
  InputErrorTextComponent,
  HumanizedFormErrorDirective,
  PortalModule,
  NgxMaskDirective
];

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextInputComponent,
    multi: true,
  }],
})
export class TextInputComponent extends ControlValueAccessorDirective {
  @Input({ required: true })
  public label = '';

  @Input()
  public mask = '';

  @Input()
  public placeholder = '';
}
