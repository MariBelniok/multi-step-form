import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StepperComponent } from './shared/components/stepper/stepper.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [StepperComponent],
  standalone: true,
})
export class AppComponent {
  public onCurrentStepChanged(step: number) {}
}
