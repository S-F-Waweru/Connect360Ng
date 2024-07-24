import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { exhaustMap, map, catchError, of } from "rxjs"
import { AuthService } from "../../Services/auth.service"
import { AuthAction } from "../Actions/auth.actions"
import { ToastrService } from "ngx-toastr"



@Injectable()
export class AuthEffects{
    constructor(
        private  action$ :Actions,
        private auth:AuthService,
        private route:Router,
        private toastr :ToastrService
    ){}

    $register = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.register),
            exhaustMap(({user}) => this.auth.register(user).pipe(
                map(response =>{
                    this.route.navigate(['login'])
                    this.toastr.success('Registration', response.Message)
                    return AuthAction.registerSuccess({response:response})

                }),
                // error.Message
                catchError(error => {
                    this.toastr.error(error.message,'Registeration');
                    console.log(error)
                    return of(AuthAction.registerFailure({message: error.message }));
                  })
            ))
        )
    })

    login$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.login),
            exhaustMap(({user})=> this.auth.login(user).pipe(
                map(response => {
                    console.log(response)
                    // this.route.navigate([''])
                    // add to local storage
                    localStorage.setItem('token', response.token)
                    localStorage.setItem('UserId', response.UserId)
                    localStorage.setItem('Role', response.Role)
                    this.toastr.success(response.Message, 'Login successfull')

                    return AuthAction.loginSuccess({response})
                }),
                catchError(error => {
                    this.toastr.error( error.message , 'Login Failed');
                    return of(AuthAction.loginFailure({message: error.message }));
                  })
            ))
        )
    })

    //Forgot Password
    forgorPassword$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.resetEmail),
            exhaustMap(({email})=> this.auth.forgotPassword(email).pipe(
                map(response =>{
                    this.toastr.success('Forgot Password', response.Message)
                    return AuthAction.resetEmailSuccess({response})
                })
                ,
                catchError(error => {
                    this.toastr.error('Forgot Password', error.message );
                    return of(AuthAction.resetEmailFailure({message: error.error.message }));
                  })
            ))

        )
    })

    // changePassword
    changePassword$ =  createEffect(()=>{
        return this.action$.pipe(
            ofType(AuthAction.changePassword),
            exhaustMap(({password}) => this.auth.changePassword(password).pipe(
                map(response => {
                    this.toastr.success('Forgot Password', response.Message)
                    return AuthAction.changePasswordSuccess({response})
                }),
                catchError(error => {
                    this.toastr.error('Forgot Password', error.error.message );
                    return of(AuthAction.changePasswordFailure({message: error.message }));
                  })
            ))
        )
    })

    revokeGov$ = createEffect (()=> {
        return this.action$.pipe(
            ofType(AuthAction.revokeGov),
            exhaustMap(({Id})=> this.auth.revokeGov(Id).pipe(
                map(response =>{
                    this.toastr.success('Gov Official Approved!', response.message)
                    return AuthAction.revokeGovSuccess({message :response.message})
                }),
                catchError(error => {
                    this.toastr.error('Gov Official Failed!', error.error.message );
                    return of(AuthAction.revokeGovFailure({message: error.message }));
                  })
            ))
        )
    })


    approveGov$ = createEffect (()=> {
        return this.action$.pipe(
            ofType(AuthAction.approveGov),
            exhaustMap(({Id})=> this.auth.approveGov(Id).pipe(
                map(response =>{
                    this.toastr.success('Gov Official Approved!', response.message)
                    return AuthAction.approveGovSuccess({message :response.message})
                }),
                catchError(error => {
                    this.toastr.error('Gov Official Failed!', error.error.message );
                    return of(AuthAction.approveGovFailure({message: error.message }));
                  })
            ))
        )
    })
    getUsers$ = createEffect (()=> {
        return this.action$.pipe(
            ofType(AuthAction.getUsers),
            exhaustMap(()=> this.auth.getUsers().pipe(
                map(response =>{
                    this.toastr.success('All Users fetched!', 'Gotten All Users')
                    return AuthAction.getUsersSuccess({users:response})
                }),
                catchError(error => {
                    this.toastr.error(error.message, 'User Fetch  Failed!' );
                    return of(AuthAction.getUsersFailure({message: error.message }));
                  })
            ))
        )
    })
}