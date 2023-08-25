import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { ControlValueAccessorDirective } from '../../directives/control-value-accessor.directive';

@Component({
  selector: 'switch-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './switch-input.component.html',
  styleUrls: ['./switch-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: SwitchInputComponent,
    multi: true,
  }],
})
export class SwitchInputComponent extends ControlValueAccessorDirective {}
