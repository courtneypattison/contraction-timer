import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractionTimerComponent } from './contraction-timer.component';

describe('ContractionTimerComponent', () => {
  let component: ContractionTimerComponent;
  let fixture: ComponentFixture<ContractionTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContractionTimerComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contraction timer component', () => {
    expect(component).toBeTruthy();
  });
});
