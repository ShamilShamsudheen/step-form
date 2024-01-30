import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [NgClass],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css'
})
export class WizardComponent {
  public count:number = 1;
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
