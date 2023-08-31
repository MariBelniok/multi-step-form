import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {

}
