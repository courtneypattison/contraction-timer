import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContractionsModule } from './contractions/contractions.module';

import { ContractionsComponent } from './contractions/contractions.component';
import { ContractionTimerComponent } from './contractions/contraction-timer/contraction-timer.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'contractions', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    ContractionsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
