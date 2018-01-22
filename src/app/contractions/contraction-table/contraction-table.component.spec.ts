import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionTableComponent } from './contraction-table.component';

import { ContractionService } from '../shared/contraction.service';
import { LoggerService } from '../../core/logger.service';

import { MockLoggerService } from 'testing/mock-logger.service';

import { TimePipe } from 'app/shared/time.pipe';

describe('ContractionTableComponent', () => {
  let component: ContractionTableComponent;
  let fixture: ComponentFixture<ContractionTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule,
        MatTableModule
      ],
      declarations: [
        ContractionTableComponent,
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
    fixture = TestBed.createComponent(ContractionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create contraction table component', () => {
    expect(component).toBeTruthy();
  });
});
