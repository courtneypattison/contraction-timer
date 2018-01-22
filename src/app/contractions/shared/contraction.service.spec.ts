import { TestBed, inject } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionService } from './contraction.service';
import { LoggerService } from '../../core/logger.service';

import { MockLoggerService } from 'testing/mock-logger.service';

describe('ContractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule
      ],
      providers: [
        ContractionService,
        { provide: LoggerService, useClass: MockLoggerService }
      ]
    });
  });

  it('should be created', inject([ContractionService], (service: ContractionService) => {
    expect(service).toBeTruthy();
  }));
});
