import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ct-contraction-timer',
  templateUrl: './contraction-timer.component.html',
  styleUrls: ['./contraction-timer.component.css']
})
export class ContractionTimerComponent implements OnInit {

  timing = false;

  constructor() { }

  ngOnInit() {
  }

  onToggleTiming() {
    this.timing = !this.timing;
  }
}