import { Directive, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Directive({
  standalone: true
})
export class ControlValueAccessorDirective implements ControlValueAccessor {
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
