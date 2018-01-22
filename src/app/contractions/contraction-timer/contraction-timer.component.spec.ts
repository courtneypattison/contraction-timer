import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionTimerComponent } from './contraction-timer.component';

import { ContractionService } from '../shared/contraction.service';
import { LoggerService } from '../../core/logger.service';

import { MockLoggerService } from 'testing/mock-logger.service';

describe('ContractionTimerComponent', () => {
  let component: ContractionTimerComponent;
  let fixture: ComponentFixture<ContractionTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule
      ],
      declarations: [ContractionTimerComponent],
      providers: [
        ContractionService,
        { provide: LoggerService, useClass: MockLoggerService }
      ]
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
