import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractionsRoutingModule } from './contractions-routing.module';

import { ContractionDetailComponent } from './contraction-detail/contraction-detail.component';
import { ContractionsComponent } from './contractions.component';

@NgModule({
  imports: [
    CommonModule,
    ContractionsRoutingModule
  ],
  declarations: [
    ContractionDetailComponent,
    ContractionsComponent
  ]
})
export class ContractionsModule { }
