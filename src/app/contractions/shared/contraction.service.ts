import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';

import { Contraction } from '../shared/contraction.model';

import { LoggerService } from '../../core/logger.service';

@Injectable()
export class ContractionService {
  private contractions = 'contractions';

  constructor(private angularFirestore: AngularFirestore, private logger: LoggerService) { }

  addContractionStartTime() {
    const startTime = new Date();
    this.logger.log(`Add contraction to firestore: (startTime: ${startTime}, timing: true, details: false).`);
    this.angularFirestore
      .collection<Contraction>(this.contractions)
      .add({
        startTime: startTime,
        timing: true,
        details: false
      });
  }

  updateContractionTiming(id: string) {
    this.logger.log(`Update contraction timing in firestore: (id: ${id}, timing: false).`);
    this.angularFirestore
      .doc<Contraction>(`${this.contractions}/${id}`)
      .update({ timing: false });
  }

  updateContractionDetails(id: string, startTime: Date, interval: number) {
    const duration = new Date().valueOf() - startTime.valueOf();
    this.logger.log(`Update contraction details in firestore: (id: ${id}, duration: ${duration}, interval: ${interval}).`);
    this.angularFirestore
      .doc<Contraction>(`${this.contractions}/${id}`)
      .update({
        duration: duration,
        interval: interval,
        details: true
      });
  }

  getContractions(): Observable<Contraction[]> {
    this.logger.log('Get contractions from firestore.');
    return this.angularFirestore
      .collection<Contraction>(this.contractions, ref => ref.orderBy('startTime', 'desc').where('details', '==', true))
      .valueChanges();
  }

  getRecentContractions(): Observable<Contraction[]> {
    this.logger.log('Get last one or two contractions from firestore.');
    return this.angularFirestore
      .collection<Contraction>(this.contractions, ref => ref.orderBy('startTime', 'desc').limit(2))
      .snapshotChanges().map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Contraction;
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      });
  }

  startTimer(): Observable<any> {
    this.logger.log('Start timer.');
    return Observable.timer(0, 1000);
  }
}
