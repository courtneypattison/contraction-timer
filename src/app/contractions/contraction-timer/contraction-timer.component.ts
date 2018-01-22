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
  private unsubscribeContractions = new Subject();
  private unsubscribeTimer = new Subject();
  private prevStartTime = new Date(0);

  timing: boolean;
  id: string;
  ticks = 0;

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.contractionService
      .getRecentContractions()
      .takeUntil(this.unsubscribeContractions)
      .subscribe(contractions => {
        this.timing = true;
        let interval = 0;

        if (contractions.length === 2) {
          interval = contractions[0].startTime.valueOf() - contractions[1].startTime.valueOf();
        }

        if (contractions.length) {
          this.timing = contractions[0].timing;
          this.id = contractions[0].id;

          if (!this.timing && !contractions[0].details) {
            this.contractionService.updateContractionDetails(this.id, contractions[0].startTime, interval);
          }
        } else {
          this.timing = false;
        }
      });
  }


  onToggleTiming() {
    if (this.timing) {
      this.contractionService.updateContractionTiming(this.id);
      this.ticks = 0;
      this.unsubscribeTimer.next();
     } else {
       this.contractionService.addContractionStartTime();
       this.contractionService
       .startTimer()
       .takeUntil(this.unsubscribeTimer)
       .subscribe(ticks => {
          this.ticks = ticks * 1000; // Convert to milliseconds
       });
     }
  }

  ngOnDestroy() {
    this.unsubscribeContractions.next();
    this.unsubscribeContractions.complete();
  }
}
