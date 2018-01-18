import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

@Injectable()
export class ContractionService {

  constructor(angularFirestore: AngularFirestore) { }

  postContraction(startTime: Date, endTime: Date) {
    //
  }

}
