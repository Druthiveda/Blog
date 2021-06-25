import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BodyfactsComponent } from './about/bodyfacts/bodyfacts.component';
import { ImagesComponent } from './about/images/images.component';
import { PersonalinformationComponent } from './about/personalinformation/personalinformation.component';
import { AwardsComponent } from './awards/awards.component';
import { EducationComponent } from './education/education.component';
import { FamilyComponent } from './family/family.component';
import { FavouritethingsComponent } from './favouritethings/favouritethings.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent,
  children:[{path:'personalinformation',component:PersonalinformationComponent},
            {path:'bodyfacts',component:BodyfactsComponent},
            {path:'images',component:ImagesComponent}
           ]},
  {path:'family',component:FamilyComponent},
  {path:'education',component:EducationComponent},
  {path:'movies',component:MoviesComponent},
  {path:'favouritethings',component:FavouritethingsComponent},
  {path:'awards',component:AwardsComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
