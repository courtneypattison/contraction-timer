import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/takeUntil';

import { Contraction } from '../shared/contraction.model';
import { ContractionState } from '../shared/contraction-state.model';

@Injectable()
export class ContractionService {
  private contractionState = 'contractionState';
  private contractionId = 'currentContraction';
  private contractions = 'contractions';

  constructor(private angularFirestore: AngularFirestore) { }

  initContractionState(timing: boolean, startTime: Date) {
    this.angularFirestore
      .collection<ContractionState>(this.contractionState)
      .doc<ContractionState>(this.contractionId)
      .update({})
      .catch(err => {
        this.angularFirestore
          .collection<ContractionState>(this.contractionState)
          .doc<ContractionState>(this.contractionId)
          .set({
            timing: timing,
            startTime: startTime
          });
      });

  }

  updateContractionState(timing: boolean) {
    console.log(`Update contraction state: (timing: ${timing}).`);
    const contractionState = timing ? { timing: timing, startTime: new Date() } : { timing: timing };
    this.angularFirestore
      .collection<ContractionState>(this.contractionState)
      .doc<ContractionState>(this.contractionId)
      .update(contractionState);
  }

  getContractionState(): Observable<ContractionState> {
    console.log('Get contraction state.');
    return this.angularFirestore
      .collection<ContractionState>(this.contractionState)
      .valueChanges()
      .flatMap(res => res);
  }

  getPrevContraction(): Observable<Contraction> {
    console.log('Get previous contraction.');

    return this.angularFirestore
      .collection<Contraction>(this.contractions, ref => ref.orderBy('startTime', 'desc').limit(1))
      .valueChanges()
      .flatMap(res => res);
  }

  addContraction(startTime: Date, endTime: Date, interval: number) {
    const duration = new Date().valueOf() - startTime.valueOf();
    console.log(`Add contraction to firestore:
      (startTime: ${startTime}, endTime: ${endTime}), duration: ${duration}, interval: ${interval}.`);
    this.angularFirestore
      .collection<Contraction>(this.contractions)
      .add({
        startTime: startTime,
        duration: duration,
        interval: interval
      });
  }

  getContractions(): Observable<any[]> {
    console.log('Get contractions from firestore.');
    return this.angularFirestore
      .collection<Contraction>(this.contractions, ref => ref.orderBy('startTime', 'desc'))
      .valueChanges();
  }
}
