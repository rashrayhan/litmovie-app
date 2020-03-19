import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { HomeGuard } from './guards/home/home.guard';
import { LoginGuard } from './guards/login/login.guard';
import { FavoritesComponent } from './pages/favorites/favorites.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'login', component: LoginComponent, canActivate: [HomeGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [HomeGuard] },
  { path: 'moviedetails', component: MoviedetailsComponent },
  { path: 'favorites', component: FavoritesComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
