import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { ContractionsRoutingModule } from './contractions-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';
import { ContractionsComponent } from './contractions.component';
import { ContractionTableComponent } from './contraction-table/contraction-table.component';

import { ContractionService } from './shared/contraction.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatTableModule,
    ContractionsRoutingModule,
    SharedModule
  ],
  declarations: [
    ContractionTimerComponent,
    ContractionsComponent,
    ContractionTableComponent
  ],
  providers: [ContractionService]
})
export class ContractionsModule { }
