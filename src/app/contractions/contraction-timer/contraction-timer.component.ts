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
  private prevStartTime = new Date(0);

  timing: boolean;
  id: string;

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.contractionService
      .getRecentContractions()
      .takeUntil(this.ngUnsubscribe)
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
        }

        if (!contractions.length) {
          this.timing = false;
        }
      });
  }


  onToggleTiming() {
    this.timing ? this.contractionService.updateContractionTiming(this.id) : this.contractionService.addContractionStartTime();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
