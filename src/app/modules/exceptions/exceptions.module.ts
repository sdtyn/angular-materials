import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ExceptionsMainView } from './views/main/exceptions.main.view';
import { Exception404View } from './views/404/exceptions.404.view';


const routes: Routes = [
  { path: 'exception/404',    		component: Exception404View },
  { path: 'exceptions', 			redirectTo:'exception/404' , 		pathMatch: 'full' }
];


@NgModule({
  declarations: [
    ExceptionsMainView,
	Exception404View
  ],
  imports: [
	RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [
	ExceptionsMainView	
  ]
})
export class ExceptionsModule {}
