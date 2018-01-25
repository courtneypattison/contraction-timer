import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-contraction-summary',
  templateUrl: './contraction-summary.component.html',
  styleUrls: ['./contraction-summary.component.css']
})
export class ContractionSummaryComponent implements OnInit {
  timeframe: number;
  duration: number;
  interval: number;

  constructor() { }

  ngOnInit() {
    this.timeframe = 1.5;
    this.duration = 0;
    this.interval = 0;
  }

}
