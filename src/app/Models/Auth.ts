export interface User {
    UserId : number
    Username:string,
    Email:string,
    Role:string,
    Password:string
}

export interface LoginRequest {
    Email:string,
    Password:string
}

export interface LoginResponse {
    Token : string,
    Message:string,
    Role:string,
    UserID:string
}

export interface RegisterRequest {
    Username:string,
    Email:string,
    Role:string,
    Password:string
}

export interface RegisterResponse {
    Message:string,
}

export interface ResetEmailRequest{
    Email:string,
}

export interface ResetEmailResponse {
    Message:string,
}

export interface ChangePasswordRequest{
    Password:string,
}

export interface ChangePasswordResponse {
    Message:string,
}