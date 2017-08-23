import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


/* Feature Modules */
import { RegistrationModule } 	from '../registration/registration.module';

export const routes: Routes = [
  { path: 'registration',					redirectTo: 'registration', 	pathMatch: 'full' },
  { path: 'login',							redirectTo: 'login', 			pathMatch: 'full' },
  { path: '',								redirectTo: 'uielements', 		pathMatch: 'full' },
  { path: 'charts',							redirectTo: 'charts', 			pathMatch: 'full' },
  { path: 'custom',							redirectTo: 'custom', 			pathMatch: 'full' },
  { path: '**',								redirectTo: 'exception/404', 	pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}