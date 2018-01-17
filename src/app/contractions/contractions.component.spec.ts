import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionDetailComponent } from './contraction-detail/contraction-detail.component';
import { ContractionsComponent } from './contractions.component';

describe('ContractionsComponent', () => {
  let component: ContractionsComponent;
  let fixture: ComponentFixture<ContractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContractionDetailComponent,
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
