import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ContractionsRoutingModule } from './contractions-routing.module';

import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';
import { ContractionsComponent } from './contractions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ContractionsRoutingModule
  ],
  declarations: [
    ContractionTimerComponent,
    ContractionsComponent
  ]
})
export class ContractionsModule { }
