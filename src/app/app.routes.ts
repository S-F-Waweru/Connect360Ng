import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PollsComponent } from './polls/polls.component';
import { AddPollComponent } from './add-poll/add-poll.component';
import { UpdatePollComponent } from './update-poll/update-poll.component';
import { PollComponent } from './poll/poll.component';
import { ViewsComponent } from './views/views.component';
import { AddViewsComponent } from './add-views/add-views.component';
import { UpdateViewsComponent } from './update-views/update-views.component';
import { ViewComponent } from './view/view.component';
import { IncidentsComponent } from './incidents/incidents.component';
import { IncidentComponent } from './incident/incident.component';
import { AddIncidentComponent } from './add-incident/add-incident.component';
import { UpdateIncidentComponent } from './update-incident/update-incident.component';
import { EducateComponent } from './educate/educate.component';
import { CitizenDashComponent } from './citizen-dash/citizen-dash.component';
import { GovDashComponent } from './gov-dash/gov-dash.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
        {path:'', component:HomepageComponent} ,
        {path:'register', component:RegisterComponent} ,
        {path:'login', component:LoginComponent} ,
        {path:'forgotpassword', component:ForgotPasswordComponent} ,
        {path:'changepassword', component:ChangePasswordComponent} ,

        {path:'polls', children:[
        {path:'', component:PollsComponent} ,
        {path:'poll/:id', component:PollComponent} ,
        {path:'add', component:AddPollComponent} ,
        {path:'update', component:UpdatePollComponent} ,
]},
        {path:'views', children:[
                {path:'', component:ViewsComponent} ,
                {path:'view/:id', component:ViewComponent} ,
                {path:'add', component:AddViewsComponent} ,
                {path:'update/:id', component:UpdateViewsComponent} ,
        ]} ,

        {path:'incidents', children:[
                {path:'', component:IncidentsComponent} ,
                {path:'incident/:id', component:IncidentComponent} ,
                {path:'add', component:AddIncidentComponent} ,
                // {path:'update/:id', component:UpdateIncidentComponent} ,
        ]} ,

        {path:'educate', component:EducateComponent},
        {path:'citizen', component:CitizenDashComponent},
        {path:'gov', component:GovDashComponent},
        {path:'admin', component:AdminDashComponent},

        {path:'**', component:PageNotFoundComponent}









        



];
