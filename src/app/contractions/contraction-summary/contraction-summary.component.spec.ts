import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionSummaryComponent } from './contraction-summary.component';

describe('ContractionSummaryComponent', () => {
  let component: ContractionSummaryComponent;
  let fixture: ComponentFixture<ContractionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractionSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
