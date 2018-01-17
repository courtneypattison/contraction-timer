import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContractionsModule } from './contractions/contractions.module';

import { ContractionsComponent } from './contractions/contractions.component';
import { ContractionDetailComponent } from './contractions/contraction-detail/contraction-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'contractions', pathMatch: 'full' }
];

@NgModule({
  imports: [
    ContractionsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
