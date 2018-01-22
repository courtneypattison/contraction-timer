import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

import { Contraction } from '../shared/contraction.model';
import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-table',
  templateUrl: './contraction-table.component.html',
  styleUrls: ['./contraction-table.component.css']
})
export class ContractionTableComponent implements OnInit, OnDestroy {
  private ngUnsubscribe = new Subject();
  private contractions: Contraction[];

  displayedColumns = ['startTime', 'duration', 'interval'];
  dataSource: MatTableDataSource<Contraction>;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.getContractions();
  }

  getContractions() {
    this.contractionService.getContractions()
      .takeUntil(this.ngUnsubscribe)
      .subscribe(contractions => {
        this.dataSource = new MatTableDataSource<Contraction>(contractions);
        this.dataSource.paginator = this.paginator;
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

