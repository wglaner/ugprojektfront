import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './views/login/login.component';
import {RegisterComponent} from './views/register/register.component';
import {HomeComponent} from './views/home/home.component';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import {AuthGuard} from './shared/auth.guard';
import {CreateSurveyComponent} from './views/create-survey/create-survey.component';
import {FillSurveyComponent} from './views/fill-survey/fill-survey.component';
import {DetailsSurveyComponent} from './views/details-survey/details-survey.component';
import {PopularComponent} from './views/popular/popular.component';
import {ContactComponent} from './views/contact/contact.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'popular-surveys', component: PopularComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'survey', children: [
      { path: 'fill/:id', component: FillSurveyComponent },
      { path: 'create', component: CreateSurveyComponent, canActivate: [AuthGuard]},
      { path: 'details/:id', component: DetailsSurveyComponent, canActivate: [AuthGuard]}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
