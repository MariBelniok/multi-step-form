import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormService } from '../app-form.service';
import { CheckboxInputComponent } from '../shared/components/checkbox-input/checkbox-input.component';

@Component({
  selector: 'add-ons',
  standalone: true,
  imports: [CommonModule, CheckboxInputComponent],
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddOnsComponent {
  public form = inject(AppFormService).addOnsForm;

  public options = [
    {
      label: 'Online service',
      description: 'Access to multiplayer games',
      price: 1,
      control: this.form.controls.onlineServices,
    },
    {
      label: 'Larger storage',
      description: 'Extra 1TB of cloud save',
      price: 2,
      control: this.form.controls.largerStorage,
    },
    {
      label: 'Customizable Profile',
      description: 'Custom theme on your profile',
      price: 2,
      control: this.form.controls.customizableProfile,
    },
  ]
}
