import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeMainView } from './views/main/home.main.view';

const routes: Routes = [
  { path: 'home', 				component: HomeMainView }
];


@NgModule({
  declarations: [
    HomeMainView
  ],
  imports: [
    BrowserModule,
	RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [HomeMainView]
})
export class HomeModule { }
