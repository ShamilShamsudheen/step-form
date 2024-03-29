import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStep2Component } from './wizard-step-2.component';

describe('WizardStep2Component', () => {
  let component: WizardStep2Component;
  let fixture: ComponentFixture<WizardStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardStep2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
