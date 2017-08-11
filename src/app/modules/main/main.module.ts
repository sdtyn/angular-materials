import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule } 			from '@angular/core';

/* App Root */
import { MainView } 			from './views/main/main.view';

/* Feature Modules */
import { RegistrationModule } 	from '../registration/registration.module';
import { ExceptionsModule } 	from '../exceptions/exceptions.module';
import { LoginModule } 			from '../login/login.module';
import { HomeModule } 			from '../home/home.module';
import { UIElementsModule } 	from '../uielements/uielements.module';

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
    RoutingModule
  ],
  providers: [],
  bootstrap: [MainView]
})
export class MainModule { }
