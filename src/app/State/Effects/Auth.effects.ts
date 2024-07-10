import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthAction } from "../Actions/auth.actions";
import { catchError, exhaustMap, map, of } from "rxjs";
import { AuthService } from "../../Services/auth.service";
import { Router } from "@angular/router";


@Injectable()
export class AuthEffects{
    constructor(
        private  action$ :Actions,
        private auth:AuthService,
        private route:Router
    ){}

    $register = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.register),
            exhaustMap(({user}) => this.auth.register(user).pipe(
                map(response =>{
                    this.route.navigate(['login'])
                    return AuthAction.registerSuccess({response})

                }),
                catchError(error => of(AuthAction
                    .registerFailure({message:error.error.message})
                ))
            ))
        )
    })

    login$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.login),
            exhaustMap(({user})=> this.auth.login(user).pipe(
                map(response => {
                    this.route.navigate([''])
                    // add to local storage
                    localStorage.setItem('Token', response.Token)
                    localStorage.setItem('UserId', response.UserID)
                    localStorage.setItem('Role', response.Role)

                    return AuthAction.loginSuccess({response})
                }),
                catchError(error => of(
                    AuthAction.loginFailure({message:error.error.message})
                ))
            ))
        )
    })

    //Forgot Password
    forgorPassword$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.resetEmail),
            exhaustMap(({email})=> this.auth.forgotPassword(email).pipe(
                map(response =>{
                    return AuthAction.resetEmailSuccess({response})
                })
                ,
                catchError(error => of(
                    AuthAction.resetEmailFailure({message:error.error.message})
                )
                )
            ))

        )
    })

    // changePassword
    changePassword$ =  createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.changePassword),
            exhaustMap(({password}) => this.auth.changePassword(password).pipe(
                map(response => {
                    return AuthAction.changePasswordSuccess({response})
                }),
                catchError(error => of(
                    AuthAction.changePasswordFailure({message: error.error.message})
                ))
            ))
        )
    })
}