import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ContractionService } from './contraction.service';

describe('ContractionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ContractionService]
    });
  });

  it('should be created', inject([ContractionService], (service: ContractionService) => {
    expect(service).toBeTruthy();
  }));
});
