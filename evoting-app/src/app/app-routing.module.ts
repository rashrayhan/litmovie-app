import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { VoteComponent } from './pages/vote/vote.component';

const routes: Routes = [
  {path: '',  redirectTo: 'evote',  pathMatch: 'full'},
  {path: 'evote', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'vote', component: VoteComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
