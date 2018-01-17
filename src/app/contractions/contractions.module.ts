import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ContractionsRoutingModule } from './contractions-routing.module';

import { ContractionDetailComponent } from './contraction-detail/contraction-detail.component';
import { ContractionsComponent } from './contractions.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    ContractionsRoutingModule
  ],
  declarations: [
    ContractionDetailComponent,
    ContractionsComponent
  ]
})
export class ContractionsModule { }
