import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Contraction } from '../shared/contraction.model';
import { ContractionService } from '../shared/contraction.service';

@Component({
  selector: 'ct-contraction-list',
  templateUrl: './contraction-list.component.html',
  styleUrls: ['./contraction-list.component.css']
})
export class ContractionListComponent implements OnInit {
  contractions: Contraction[];

  constructor(private contractionService: ContractionService) { }

  ngOnInit() {
    this.getContractions();
  }

  getContractions() {
    this.contractionService.getContractions().subscribe(contractions => this.contractions = contractions);
  }
}
