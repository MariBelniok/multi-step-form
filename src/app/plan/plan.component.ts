import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableCardComponent } from '../shared/components/selectable-card/selectable-card.component';
import { AppFormService } from '../app-form.service';

export enum PLAN {
  arcade = 'arcade',
  advanced = 'advanced',
  pro = 'pro',
}

@Component({
  selector: 'plan',
  standalone: true,
  imports: [CommonModule, SelectableCardComponent],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanComponent {
  public control = inject(AppFormService).planControl;

  public readonly plansMap = new Map([
    [
      PLAN.arcade,
      {
        title: 'Arcade',
        price: 9,
        image: 'assets/images/icon-arcade.svg',
      },
    ],
    [
      PLAN.advanced,
      {
        title: 'Advanced',
        price: 12,
        image: 'assets/images/icon-advanced.svg',
      },
    ],
    [
      PLAN.pro,
      {
        title: 'Pro',
        price: 15,
        image: 'assets/images/icon-pro.svg',
      },
    ],
  ]);

  public plans = Array.from(this.plansMap.keys());
}
