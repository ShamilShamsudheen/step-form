import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStep4Component } from './wizard-step-4.component';

describe('WizardStep4Component', () => {
  let component: WizardStep4Component;
  let fixture: ComponentFixture<WizardStep4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardStep4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
