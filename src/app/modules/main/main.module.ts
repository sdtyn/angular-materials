import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule } 			from '@angular/core';
import { NvD3Module } from 'ng2-nvd3';

/* App Root */
import { MainView } 			from './views/main/main.view';

/* Feature Modules */
import { RegistrationModule } 	from '../registration/registration.module';
import { ExceptionsModule } 	from '../exceptions/exceptions.module';
import { LoginModule } 			from '../login/login.module';
import { HomeModule } 			from '../home/home.module';
import { UIElementsModule } 	from '../uielements/uielements.module';
import { ChartsModule } 		from '../charts/charts.module';
import { CustomModule } 		from '../custom/custom.module';

/* Routing Module */
import { RoutingModule } 		from '../core/routing.module';

@NgModule({
  declarations: [
    MainView
  ],
  imports: [
    BrowserModule,
	  RegistrationModule,
	  ExceptionsModule,
	  LoginModule,
	  HomeModule,
    UIElementsModule,
    ChartsModule,
    CustomModule,
    RoutingModule,
	  NvD3Module
  ],
  providers: [],
  bootstrap: [MainView]
})
export class MainModule { }
