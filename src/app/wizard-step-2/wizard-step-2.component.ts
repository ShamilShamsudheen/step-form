import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard-step-2',
  standalone: true,
  imports: [],
  template: `<div class="step-text">
  <ng-content></ng-content>
</div>`,
  styleUrl: './wizard-step-2.component.css'
})
export class WizardStep2Component {

}
