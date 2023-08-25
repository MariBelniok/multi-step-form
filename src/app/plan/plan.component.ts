import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectableCardComponent } from '../shared/components/selectable-card/selectable-card.component';
import { AppFormService } from '../app-form.service';
import { SwitchInputComponent } from '../shared/components/switch-input/switch-input.component';

export enum PLAN {
  arcade = 'arcade',
  advanced = 'advanced',
  pro = 'pro',
}

export enum PAYMENT_FREQUENCY {
  monthly = 'monthly',
  yearly = 'yearly',
}

@Component({
  selector: 'plan',
  standalone: true,
  imports: [CommonModule, SelectableCardComponent, SwitchInputComponent],
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlanComponent {
  public form = inject(AppFormService).planForm;

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

  public PAYMENT_FREQUENCY = PAYMENT_FREQUENCY;
}
