import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PredectComponent } from './pred/componnent/predect/predect.component';


const routes: Routes = [
  {path:"predict",component:PredectComponent},
 
  {path:"**",redirectTo:"predict",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],

})
export class AppRoutingModule { }
