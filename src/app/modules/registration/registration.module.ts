import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { RegistrationPhoneView } from './views/phone/registration.phone.view';

const routes: Routes = [
  { path: 'registration',    		redirectTo: 'registration/phone', pathMatch: 'full' },
  { path: 'registration/phone', 	component: RegistrationPhoneView }
];


@NgModule({
  declarations: [
    RegistrationPhoneView
  ],
  imports: [
    BrowserModule,
	RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [RegistrationPhoneView]
})
export class RegistrationModule { }
