import { NgClass } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { WizardStep1Component } from '../wizard-step-1/wizard-step-1.component';
import { WizardStep2Component } from '../wizard-step-2/wizard-step-2.component';
import { WizardStep3Component } from '../wizard-step-3/wizard-step-3.component';
import { WizardStep4Component } from '../wizard-step-4/wizard-step-4.component';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [NgClass,WizardStep1Component,WizardStep2Component,WizardStep3Component,WizardStep4Component],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css'
})
export class WizardComponent implements AfterContentInit {
  public count:number = 1;
  
  ngAfterContentInit(): void {
    this.setStep(this.count)
  }
  setStep(step:number){
    this.count = step;
  }
  previousStep(){
    if(this.count > 0){
      this.count--
    }
  }
  nextStep(){
    if(this.count < 4){
      this.count++
    }
  }
}
