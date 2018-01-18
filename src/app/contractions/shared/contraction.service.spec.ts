import { TestBed, inject } from '@angular/core/testing';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { config } from 'testing/mock-config';

import { ContractionService } from './contraction.service';

describe('ContractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AngularFireModule.initializeApp(config),
        AngularFirestoreModule
      ],
      providers: [ContractionService]
    });
  });

  it('should be created', inject([ContractionService], (service: ContractionService) => {
    expect(service).toBeTruthy();
  }));
});
