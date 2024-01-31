import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardStep1Component } from './wizard-step-1.component';

describe('WizardStep1Component', () => {
  let component: WizardStep1Component;
  let fixture: ComponentFixture<WizardStep1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WizardStep1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WizardStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
