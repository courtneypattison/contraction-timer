import { TestBed, inject } from '@angular/core/testing';

import { ContractionService } from './contraction.service';

describe('ContractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContractionService]
    });
  });

  it('should be created', inject([ContractionService], (service: ContractionService) => {
    expect(service).toBeTruthy();
  }));
});
