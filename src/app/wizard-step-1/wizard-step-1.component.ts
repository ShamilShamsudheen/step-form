import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard-step-1',
  standalone: true,
  imports: [],
  template: `<div class="step-text">
  <ng-content></ng-content></div>`,
  styleUrl: './wizard-step-1.component.css'
})
export class WizardStep1Component {

}
