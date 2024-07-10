import { createReducer, on } from "@ngrx/store";
import { AuthAction } from "../Actions/auth.actions";
// 
export interface AuthInterface {
    loginSuccessMessage : string
    loginSuccessFailure : string
    loginLoading: boolean

    registerSuccessMessage : string
    registerSuccessFailure : string
    registerLoading: boolean

}

export const initialState = {
    loginSuccessMessage : '',
    loginSuccessFailure : '',
    loginLoading: false,

    registerSuccessMessage : '',
    registerSuccessFailure : '',
    registerLoading: false,
}

//


 export const authReducer = createReducer(
    initialState ,
    on(AuthAction.login, (state) => {
        return {
            ...state,
            loginSuccessMessage: '',
            loginErrorMessage: '',
            loginLoading: true
        }
    }),

    on(AuthAction.loginSuccess, (state, action) => {
        return {
            ...state,
            loginSuccessMessage: action.response.Message,
            loginErrorMessage: '',
            loginLoading: false
        }
    }),

    on(AuthAction.loginFailure, (state, action) => {
        return {
            ...state,
            loginSuccessMessage: '',
            loginErrorMessage: action.message,
            loginLoading: false
        }
    }),

    // Register

    on(AuthAction.resetEmail, (state) => {
        return {
            ...state,
            resetEmailSuccessMessage: '',
            resetEmailErrorMessage: '',
            resetEmailLoading: true
        }
    }),
    on(AuthAction.resetEmailSuccess, (state, action) => {
        return {
            ...state,
            resetEmailSuccessMessage: action.response.Message,
            resetEmailErrorMessage: '',
            resetEmailLoading: true
        }
    }),
    on(AuthAction.resetEmailFailure, (state, action) => {
        return {
            ...state,
            resetEmailSuccessMessage: '',
            resetEmailErrorMessage: action.message,
            resetEmailLoading: true
        }
    }),

    //resetEmail
    on(AuthAction.changePassword, (state) => {
        return {
            ...state,
            changePasswordSuccessMessage: '',
            changePasswordErrorMessage: '',
            changePasswordLoading: true
        }
    }),
    on(AuthAction.changePasswordSuccess, (state, action) => {
        return {
            ...state,
            changePasswordSuccessMessage: action.response.Message,
            changePasswordErrorMessage: '',
            changePasswordLoading: true
        }
    }),
    on(AuthAction.changePasswordFailure, (state, action) => {
        return {
            ...state,
            changePasswordSuccessMessage: '',
            changePasswordErrorMessage: action.message,
            changePasswordLoading: true
        }
    }),
    // change Password
    on(AuthAction.changePassword, (state) => {
        return {
            ...state,
            changePasswordSuccessMessage: '',
            changePasswordErrorMessage: '',
            changePasswordLoading: true
        }
    }),
    on(AuthAction.changePasswordSuccess, (state, action) => {
        return {
            ...state,
            changePasswordSuccessMessage: action.response.Message,
            changePasswordErrorMessage: '',
            changePasswordLoading: true
        }
    }),
    on(AuthAction.changePasswordFailure, (state, action) => {
        return {
            ...state,
            changePasswordSuccessMessage: '',
            changePasswordErrorMessage: action.message,
            changePasswordLoading: true
        }
    }),
 )