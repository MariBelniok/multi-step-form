import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextInputComponent } from '../shared/components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppFormService } from '../app-form.service';

@Component({
  selector: 'personal-info',
  standalone: true,
  imports: [CommonModule, TextInputComponent, ReactiveFormsModule],
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent {
  public form = inject(AppFormService).form;
}
