import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';

import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-summary',
  templateUrl: './contraction-summary.component.html',
  styleUrls: ['./contraction-summary.component.css']
})
export class ContractionSummaryComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  timeframe = 1;
  averageDuration = 0;
  averageInterval = 0;
  timeUnit = 'h';

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.getContractionSummary();
  }

  getContractionSummary() {
    this.contractionService
      .getContractionSummary(this.timeframe, this.timeUnit)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(contractionSummary => {
        this.averageDuration = contractionSummary.averageDuration;
        this.averageInterval = contractionSummary.averageInterval;
      });
  }

  getOneContractionSummary() {
    this.contractionService
      .getContractionSummary(this.timeframe, this.timeUnit)
      .take(1)
      .subscribe(contractionSummary => {
        this.averageDuration = contractionSummary.averageDuration;
        this.averageInterval = contractionSummary.averageInterval;
      });
  }

  onUpdateSummary() {
    this.getOneContractionSummary();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
