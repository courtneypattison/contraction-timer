import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-summary',
  templateUrl: './contraction-summary.component.html',
  styleUrls: ['./contraction-summary.component.css']
})
export class ContractionSummaryComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  timeframe = 1.5;
  duration = 0;
  interval = 0;

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.getContractionSummary();
  }

  getContractionSummary() {
    this.contractionService
      .getContractionSummary(this.timeframe)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(contractionSummary => {
        this.duration = contractionSummary.duration;
        this.interval = contractionSummary.interval;
      });
  }

  onUpdateSummary() {
    this.getContractionSummary();
    this.ngUnsubscribe.next();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
