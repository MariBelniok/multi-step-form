import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormService } from 'src/app/app-form.service';

@Component({
  selector: 'selectable-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectable-card.component.html',
  styleUrls: ['./selectable-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectableCardComponent {
  @Input({ required: true })
  public item: any;

  @Input({ required: true })
  public itemKey: any;

  @Input({ required: true })
  public isSelected = false;

  @Output()
  public planSelected = new EventEmitter();
}
