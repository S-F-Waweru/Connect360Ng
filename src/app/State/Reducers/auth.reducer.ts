import { createReducer, on } from "@ngrx/store";
import { AuthAction } from "../Actions/auth.actions";
import { User } from "../../Models/Auth";
// 
export interface AuthInterface {
    loginSuccessMessage : string
    loginSuccessFailure : string
    loginLoading: boolean

    registerSuccessMessage : string
    registerSuccessFailure : string
    registerLoading: boolean

    changePasswordSuccessMessage : string
    changePasswordSuccessFailure : string
    changePasswordLoading: boolean

    getUserSuccessMessage : User
    getUserSuccessFailure : string
    getUserLoading: boolean

    getUsersSuccessMessage : User[]
    getUsersSuccessFailure : string
    getUsersLoading: boolean

    approveGovSuccessMessage :string
    approveGovSuccessFailure : string
    approveGovLoading: boolean

    revokeGovSuccessMessage :string
    revokeGovSuccessFailure : string
    revokeGovLoading: boolean

}

export const initialState = {
    loginSuccessMessage : '',
    loginSuccessFailure : '',
    loginLoading: false,

    registerSuccessMessage : '',
    registerSuccessFailure : '',
    registerLoading: false,



    changePasswordSuccessMessage : '',
    changePasswordSuccessFailure : '',
    changePasswordLoading: false,

    getUserSuccessMessage : '',
    getUserSuccessFailure : '',
    getUserLoading: false,

    getUsersSuccessMessage : '',
    getUsersSuccessFailure : '',
    getUsersLoading: false,

    approveGovSuccessMessage :'',
    approveGovSuccessFailure : '',
    approveGovLoading: false,

    revokeGovSuccessMessage :'',
    revokeGovSuccessFailure : '',
    revokeGovLoading: false,

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

    on(AuthAction.register, (state) => {
        return {
            ...state,
            registerSuccessMessage: '',
            registerErrorMessage: '',
            registerLoading: true
        }
    }),

    on(AuthAction.registerSuccess, (state, action) => {
        return {
            ...state,
            registerSuccessMessage: action.response.Message,
            registerErrorMessage: '',
            registerLoading: false
        }
    }),

    on(AuthAction.registerFailure, (state, action) => {
        return {
            ...state,
            registerSuccessMessage: '',
            registerErrorMessage: action.message,
            registerLoading: false
        }
    }),

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
    //approveGOv
    on(AuthAction.approveGov, (state) => {
        return {
            ...state,
            approveGovSuccessMessage: '',
            approveGovErrorMessage: '',
            approveGovLoading: true
        }
    }),

    on(AuthAction.approveGovSuccess, (state, action) => {
        return {
            ...state,
            approveGovSuccessMessage: action.message,
            approveGovErrorMessage: '',
            approveGovLoading: false
        }
    }),

    on(AuthAction.approveGovFailure, (state, action) => {
        return {
            ...state,
            approveGovSuccessMessage: '',
            approveGovErrorMessage: action.message,
            approveGovLoading: false
        }
    }),
    //approveGOv
    on(AuthAction.revokeGov, (state) => {
        return {
            ...state,
            revokeGovSuccessMessage: '',
            revokeGovErrorMessage: '',
            revokeGovLoading: true
        }
    }),

    on(AuthAction.revokeGovSuccess, (state, action) => {
        return {
            ...state,
            revokeGovSuccessMessage: action.message,
            revokeGovErrorMessage: '',
            revokeGovLoading: false
        }
    }),

    on(AuthAction.revokeGovFailure, (state, action) => {
        return {
            ...state,
            revokeGovSuccessMessage: '',
            revokeGovErrorMessage: action.message,
            revokeGovLoading: false
        }
    }),





 )