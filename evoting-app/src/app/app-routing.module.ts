import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

<<<<<<< HEAD
const routes: Routes = [

];
=======
const routes: Routes = [{
  path: "",
  redirectTo: "evote",
  pathMatch: "full"
},
{
  path: "evote",
  component: AppComponent
}];
>>>>>>> 9e654c780ef883ee85b34ca0c6889bcaa5f9529a
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
