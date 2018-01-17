import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContractionService {

  constructor(private http: HttpClient) { }

  postContraction(startTime: Date, endTime: Date) {
    // this.http.post( , startTime);
  }

}
