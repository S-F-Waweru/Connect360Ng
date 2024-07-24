import { Injectable } from '@angular/core';
import { ChangePasswordRequest, ChangePasswordResponse, LoginRequest, LoginResponse,  RegisterRequest, RegisterResponse, ResetEmailRequest, ResetEmailResponse, User } from '../Models/Auth';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl ="http://localhost:2000/auth"

  constructor(
    private http:HttpClient
  ) {}

  register(user:RegisterRequest):Observable<RegisterResponse>{
    return  this.http.post<RegisterResponse>(this.baseUrl + '/register', user)
  }

  login(user:LoginRequest):Observable<LoginResponse>{
    console.log(user);
      return  this.http.post<LoginResponse>(this.baseUrl + '/login', user)
  }

  forgotPassword(email:ResetEmailRequest):Observable<ResetEmailResponse>{
    return this.http.post<ResetEmailResponse>(this.baseUrl + '/forgotPassword', email)
  }

  changePassword(password :ChangePasswordRequest):Observable<ChangePasswordResponse>{
    return this.http.post<ChangePasswordResponse>(this.baseUrl + '/forgotPassword', password)
  }
  getUser(Id :string):Observable<User>{
    return this.http.get<User>(this.baseUrl + '/user/'+ Id)
  }
  getUsers():Observable<User[]>{
    console.log('reaching here');
    
    return this.http.get<User[]>(this.baseUrl + '/users')
  }

  approveGov(Id :string):Observable<{message:string}>{
    return this.http.get<{message:string}>(this.baseUrl + '/approve/'+  Id)
  }
  revokeGov(Id: string):Observable<{message:string}>{
    return this.http.get<{message:string}>(this.baseUrl + '/forgotPassword'+ Id)
  }

  //getUSer
  //getUsers

  // ApporveGov
  // revokeGov
}