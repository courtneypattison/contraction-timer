import { Component, OnInit } from '@angular/core';

import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-timer',
  templateUrl: './contraction-timer.component.html',
  styleUrls: ['./contraction-timer.component.css']
})
export class ContractionTimerComponent implements OnInit {
  startTime: Date;
  timing = false;

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
  }

  onToggleTiming() {
    if (this.timing) {
      this.contractionService.addContraction(this.startTime, new Date());
    } else {
      this.startTime = new Date();
    }

    this.timing = !this.timing;
  }
}
