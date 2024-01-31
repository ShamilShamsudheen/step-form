import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard-step-4',
  standalone: true,
  imports: [],
  template: `<div class="step-text">
  <h1>Completed !.</h1>
  <p>You have successfully completed all steps.</p>
</div>
<div class="step-btn"></div>`,
  styleUrl: './wizard-step-4.component.css'
})
export class WizardStep4Component {

}
