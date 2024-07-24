export interface User {
    UserId : string
    Username:string,
    Email:string,
    Role:string,
    RoleStatus:string
}

export interface LoginRequest {
    Email:string,
    Password:string
}

export interface LoginResponse {
    token : string,
    Message:string,
    Role:string,
    UserId:string
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