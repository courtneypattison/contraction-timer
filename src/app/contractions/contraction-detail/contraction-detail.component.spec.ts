import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionDetailComponent } from './contraction-detail.component';

describe('ContractionDetailComponent', () => {
  let component: ContractionDetailComponent;
  let fixture: ComponentFixture<ContractionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
