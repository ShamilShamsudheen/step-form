import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard-step-3',
  standalone: true,
  imports: [],
  template: `<div class="step-text">
  <ng-content></ng-content>
</div>`,
  styleUrl: './wizard-step-3.component.css'
})
export class WizardStep3Component {

}
