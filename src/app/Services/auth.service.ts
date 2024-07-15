import { Injectable } from '@angular/core';
import { ChangePasswordRequest, ChangePasswordResponse, LoginRequest, LoginResponse,  RegisterRequest, RegisterResponse, ResetEmailRequest, ResetEmailResponse, User } from '../Models/Auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   constructor(
    private route:Router,
    private toastr:ToastrService
  ) { }


  users: User[] = [
    {
      UserId:1,
      Username:'Sam',
      Email:'Sam@gmail.com',
      Role :'Citizen',
      Password:'Qwerty@2024'
    }
  ]

  getUsers(){
    return this.users
  }
  register(user:RegisterRequest){
    const UserId = Math.floor(Math.random() *1000)
    const newUser:User = {UserId,...user}

    if(this.users.find(u=> u.Username === newUser.Username)){
      console.log('username Exit!!')
      // this.toastr.error('USername Exist!!', 'Error')
      this.route.navigate(['register'])
    }else{
      this.users.push(newUser)
      console.log(this.users)
      this.route.navigate(['login'])
    }
  }

  login(user:LoginRequest){
   const founduser =  this.users.find(u => u.Password===user.Password && u.Email=== user.Email)
   if(founduser){
    localStorage.setItem('UserID', founduser.UserId.toString())
    localStorage.setItem('Role', founduser.Role.toString())

    console.log(founduser)
    if(founduser.Role === 'Citizen'){
      this.route.navigate(['citizen'])
    }else if(founduser.Role === 'GOV'){
     this.route.navigate(['gov'])
    }else if(founduser.Role === 'Admin'){
      this.route.navigate(['admin'])
     }
   }else{
    console.log("User Not Found")
    // this.toastr.error('USername Exist!!', 'Error')
    
   

   }
  }






  // private readonly baseUrl =""

  // constructor(
  //   private http:HttpClient
  // ) { }

  // register(user:RegisterRequest):Observable<RegisterResponse>{
  //   return  this.http.post<RegisterResponse>(this.baseUrl + '/register', user)
  // }

  // login(user:LoginRequest):Observable<LoginResponse>{
  //   return  this.http.post<LoginResponse>(this.baseUrl + '/login', user)
  // }

  // forgotPassword(email:ResetEmailRequest):Observable<ResetEmailResponse>{
  //   return this.http.post<ResetEmailResponse>(this.baseUrl + '/forgotPassword', email)
  // }

  // // changePassword(password :ChangePasswordRequest):Observable<ChangePasswordResponse>{
  // //   return this.http.post<ChangePasswordResponse>(this.baseUrl + '/forgotPassword', password)
  // }
}