import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { Contraction } from '../shared/contraction.model';
import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-list',
  templateUrl: './contraction-list.component.html',
  styleUrls: ['./contraction-list.component.css']
})
export class ContractionListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  private contractions: Contraction[];

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.getContractions();
  }

  getContractions() {
    this.contractionService.getContractions()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(contractions => this.contractions = contractions);
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
