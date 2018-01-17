import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';
import { ContractionsComponent } from './contractions.component';

import { ContractionService } from './shared/contraction.service';

describe('ContractionsComponent', () => {
  let component: ContractionsComponent;
  let fixture: ComponentFixture<ContractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [
        ContractionTimerComponent,
        ContractionsComponent
      ],
      providers: [ContractionService]
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
