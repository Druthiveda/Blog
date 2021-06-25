import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FamilyComponent } from './family/family.component';
import { EducationComponent } from './education/education.component';
import { MoviesComponent } from './movies/movies.component';
import { FavouritethingsComponent } from './favouritethings/favouritethings.component';
import { AwardsComponent } from './awards/awards.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PersonalinformationComponent } from './about/personalinformation/personalinformation.component';
import { BodyfactsComponent } from './about/bodyfacts/bodyfacts.component';
import { ImagesComponent } from './about/images/images.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FamilyComponent,
    EducationComponent,
    MoviesComponent,
    FavouritethingsComponent,
    AwardsComponent,
    PagenotfoundComponent,
    PersonalinformationComponent,
    BodyfactsComponent,
    ImagesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
