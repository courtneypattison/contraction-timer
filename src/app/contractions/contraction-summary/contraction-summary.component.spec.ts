import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionSummaryComponent } from './contraction-summary.component';

import { TimePipe } from 'app/shared/time.pipe';
import { ContractionService } from 'app/contractions/shared/contraction.service';
import { LoggerService } from '../../core/logger.service';

import { MockLoggerService } from 'testing/mock-logger.service';

describe('ContractionSummaryComponent', () => {
  let component: ContractionSummaryComponent;
  let fixture: ComponentFixture<ContractionSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule,
        BrowserAnimationsModule,
        FormsModule,
        MatInputModule
      ],
      declarations: [
        ContractionSummaryComponent,
        TimePipe
      ],
      providers: [
        ContractionService,
        { provide: LoggerService, useClass: MockLoggerService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractionSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create contraction summary component', () => {
  //   expect(component).toBeTruthy();
  // });
});
