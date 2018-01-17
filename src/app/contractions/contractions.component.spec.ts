import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';
import { ContractionsComponent } from './contractions.component';

describe('ContractionsComponent', () => {
  let component: ContractionsComponent;
  let fixture: ComponentFixture<ContractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContractionTimerComponent,
        ContractionsComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contractions component', () => {
    expect(component).toBeTruthy();
  });
});
