import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContractionsComponent } from './contractions.component';
import { ContractionDetailComponent } from './contraction-detail/contraction-detail.component';

const routes = [
    { path: '',
    component: ContractionsComponent,
    children: [
      { path: '', component: ContractionDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContractionsRoutingModule {

}
