import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TextInputComponent } from './shared/components/text-input/text-input.component';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TextInputComponent, ReactiveFormsModule],
})
export class AppComponent implements OnInit {
  public control = new FormControl<string>('', [Validators.required, Validators.email]);

  ngOnInit(): void {
  }

  public onCurrentStepChanged(step: number) {}
}
