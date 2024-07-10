import { Injectable } from '@angular/core';
import { ChangePasswordRequest, ChangePasswordResponse, LoginRequest, LoginResponse,  RegisterRequest, RegisterResponse, ResetEmailRequest, ResetEmailResponse } from '../Models/Auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl =""

  constructor(
    private http:HttpClient
  ) { }

  register(user:RegisterRequest):Observable<RegisterResponse>{
    return  this.http.post<RegisterResponse>(this.baseUrl + '/register', user)
  }

  login(user:LoginRequest):Observable<LoginResponse>{
    return  this.http.post<LoginResponse>(this.baseUrl + '/login', user)
  }

  forgotPassword(email:ResetEmailRequest):Observable<ResetEmailResponse>{
    return this.http.post<ResetEmailResponse>(this.baseUrl + '/forgotPassword', email)
  }

  changePassword(password :ChangePasswordRequest):Observable<ChangePasswordResponse>{
    return this.http.post<ChangePasswordResponse>(this.baseUrl + '/forgotPassword', password)
  }
}