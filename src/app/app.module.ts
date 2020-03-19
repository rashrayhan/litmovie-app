import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';
import { LoggedinnavbarComponent } from './pages/loggedinnavbar/loggedinnavbar.component';
import { Appconstant } from './utils/appconstant';
import { Localcookie } from './utils/localcookie';
import { DatePipe } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input'
import { FavoritesComponent } from './pages/favorites/favorites.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    MoviedetailsComponent,
    LoggedinnavbarComponent,
    FavoritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatInputModule,
    FormsModule,
    
  ],
  providers: [Appconstant, CookieService, Localcookie, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
