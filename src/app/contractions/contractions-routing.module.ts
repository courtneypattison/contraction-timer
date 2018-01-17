import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContractionsComponent } from './contractions.component';
import { ContractionTimerComponent } from './contraction-timer/contraction-timer.component';

const routes = [
    { path: '',
    component: ContractionsComponent,
    children: [
      { path: '', component: ContractionTimerComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractionsRoutingModule {

}
