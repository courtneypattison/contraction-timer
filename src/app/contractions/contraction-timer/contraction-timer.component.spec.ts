import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContractionTimerComponent } from './contraction-timer.component';

import { ContractionService } from '../shared/contraction.service';

describe('ContractionTimerComponent', () => {
  let component: ContractionTimerComponent;
  let fixture: ComponentFixture<ContractionTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ContractionTimerComponent],
      providers: [ContractionService]
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
