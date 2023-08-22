import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { InputErrorTextComponent } from '../input-error-text/input-error-text.component';
import { HumanizedFormErrorDirective } from '../../directives/humanized-form-error.directive';
import { PortalModule } from '@angular/cdk/portal';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ReactiveFormsModule, InputErrorTextComponent, HumanizedFormErrorDirective, PortalModule],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: TextInputComponent,
    multi: true,
  }],
})
export class TextInputComponent implements ControlValueAccessor {
  @Input({ required: true }) 
  public control!: FormControl;

  public value = '';

  public touched = false;

  public onChanged = () => {}

  public onTouched = () => {}

  public writeValue(value: string): void {
    this.value = value;
  }
  public registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
