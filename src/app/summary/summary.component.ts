import { ChangeDetectionStrategy, Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppFormService } from '../app-form.service';
import { map, tap } from 'rxjs';
import { ADD_ON, addOnsOptions } from '../add-ons/add-ons.component';
import { PLAN, plansMap } from '../plan/plan.component';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryComponent {
  @Output()
  public changePlan = new EventEmitter();

  public forms = inject(AppFormService);

  public plan = this.forms.planForm.value.plan as PLAN;

  public yearlyPayment = this.forms.planForm.value.yearlyPayment;

  public plansMap = plansMap;

  public selectedAddOns = Object.entries(this.forms.addOnsForm.value)
    .filter(([_, isActive]) => isActive)
    .flatMap(([key]) => {
      console.log(key, addOnsOptions.filter(({ control }) => control.includes(key)))
      return addOnsOptions.filter(({ control }) => control.includes(key))
    });

  public totalPaymentValue = [
    plansMap.get(this.plan)?.price,
    ...this.selectedAddOns.map(({ price }) => price),
  ].map(Number).reduce((prev, next) => prev + next, 0);
}
