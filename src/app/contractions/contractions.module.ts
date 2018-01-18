import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { ContractionsRoutingModule } from './contractions-routing.module';

import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';
import { ContractionsComponent } from './contractions.component';
import { ContractionListComponent } from './contraction-list/contraction-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    ContractionsRoutingModule
  ],
  declarations: [
    ContractionTimerComponent,
    ContractionsComponent,
    ContractionListComponent
  ]
})
export class ContractionsModule { }
