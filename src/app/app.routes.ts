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




        ]} ,






        



];
