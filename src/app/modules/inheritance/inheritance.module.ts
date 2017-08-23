import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InheritanceMainView } from './views/main/inheritance.main.view';

const routes: Routes = [
  { path: 'inheritance', 				component: InheritanceMainView }
];


@NgModule({
  declarations: [
    InheritanceMainView
  ],
  imports: [
    BrowserModule,
	  RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [InheritanceMainView]
})
export class InheritanceModule { }
