import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-timer',
  templateUrl: './contraction-timer.component.html',
  styleUrls: ['./contraction-timer.component.css']
})
export class ContractionTimerComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  private timing: boolean;
  private prevStartTime = new Date(0);

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.contractionService.initContractionState(false, new Date(0));
    this.contractionService
      .getContractionState()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(contractionState => {
        const endTime = new Date();
        const interval = this.startTimeExists(this.prevStartTime) ? contractionState.startTime.valueOf() - this.prevStartTime.valueOf() : 0;
        this.timing = contractionState.timing;

        if (!this.timing && this.startTimeExists(contractionState.startTime)) {
          this.contractionService.addContraction(contractionState.startTime, endTime, interval);
        }
      });
    this.contractionService.getPrevContraction()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(prevContraction => {
        this.prevStartTime = prevContraction.startTime;
      });
  }

  private startTimeExists(startTime: Date): boolean {
    return startTime.valueOf() !== 0;
  }

  onToggleTiming() {
    this.contractionService.updateContractionState(!this.timing);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
