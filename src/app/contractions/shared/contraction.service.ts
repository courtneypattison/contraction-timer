import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

import { Contraction } from 'app/contractions/shared/contraction.model';

@Injectable()
export class ContractionService {

  constructor(private angularFirestore: AngularFirestore) { }

  addContraction(startTime: Date, endTime: Date) {
    console.log('add contraction');
    this.angularFirestore.collection('contractions').add({
      startTime: startTime,
      endTime: endTime,
      frequency: 0,
      length: endTime.getSeconds() - startTime.getSeconds()
    });
  }

  getContractions(): Observable<any[]> {
    return this.angularFirestore.collection('contractions').valueChanges();
  }
}
