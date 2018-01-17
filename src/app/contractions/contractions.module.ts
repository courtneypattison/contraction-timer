import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractionDetailComponent } from './contraction-detail/contraction-detail.component';
import { ContractionsComponent } from './contractions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContractionDetailComponent, ContractionsComponent]
})
export class ContractionsModule { }
