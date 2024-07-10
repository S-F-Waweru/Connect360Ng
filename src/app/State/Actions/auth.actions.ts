import { createAction, createActionGroup, props } from "@ngrx/store";
import { ChangePasswordRequest, ChangePasswordResponse, LoginRequest, LoginResponse, RegisterRequest, RegisterResponse, ResetEmailRequest, ResetEmailResponse } from "../../Models/Auth";

export const AuthAction = createActionGroup({
    source : 'AUTH API',
    events :{
       'login' :props<{user : LoginRequest}>(),
       'login success' :props<{response : LoginResponse}>(),
       'login failure' :props<{message : string}>(),

       'register' :props<{user : RegisterRequest}>(),
       'register success' :props<{response : RegisterResponse}>(),
       'register failure' :props<{message : string}>(),

       'resetEmail' :props<{email : ResetEmailRequest}>(),
       'resetEmail success' :props<{response : ResetEmailResponse}>(),
       'resetEmail failure' :props<{message : string}>(),

       'changePassword' :props<{password : ChangePasswordRequest}>(),
       'changePassword success' :props<{response : ChangePasswordResponse}>(),
       'changePassword failure' :props<{message : string}>(),








}
})