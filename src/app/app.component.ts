import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WizardComponent } from './wizard/wizard.component';
import { WizardStep1Component } from './wizard-step-1/wizard-step-1.component';
import { WizardStep2Component } from './wizard-step-2/wizard-step-2.component';
import { WizardStep3Component } from './wizard-step-3/wizard-step-3.component';
import { WizardStep4Component } from './wizard-step-4/wizard-step-4.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,WizardComponent,WizardStep1Component,WizardStep2Component,WizardStep3Component,WizardStep4Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'step-form';
}
