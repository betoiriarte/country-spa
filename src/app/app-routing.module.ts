import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
 
  {path:'countries', loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule)},
  {path:'**', redirectTo:'countries'}
]

@NgModule({
  declarations: [],

  exports: [
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
