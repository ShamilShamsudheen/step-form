import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStep3Component } from './wizard-step-3.component';

describe('WizardStep3Component', () => {
  let component: WizardStep3Component;
  let fixture: ComponentFixture<WizardStep3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardStep3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardStep3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
