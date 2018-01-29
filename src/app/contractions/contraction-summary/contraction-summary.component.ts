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
  averageDuration = 0;
  averageInterval = 0;

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.getContractionSummary();
  }

  getContractionSummary() {
    this.contractionService
      .getContractionSummary(this.timeframe)
      .takeUntil(this.ngUnsubscribe)
      .subscribe(contractionSummary => {
        this.averageDuration = contractionSummary.averageDuration;
        this.averageInterval = contractionSummary.averageInterval;
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
