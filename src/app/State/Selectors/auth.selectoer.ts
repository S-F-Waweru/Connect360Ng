
// / Feature

import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthInterface } from "../Reducers/auth.reducer";
import { state } from "@angular/animations";

const authSelectoerFeature = createFeatureSelector<AuthInterface>('auth')

export const successloginSelector = createSelector(
    authSelectoerFeature,
    (state)=>state.loginSuccessFailure
)


export const errorloginSelector = createSelector(
    authSelectoerFeature,
    (state)=>state.loginSuccessFailure
)


export const errorRegisterSelectoer = createSelector(
    authSelectoerFeature,
    (state) => state.registerSuccessFailure
)

export const successRegisterSelectoer = createSelector(
    authSelectoerFeature,
    (state) => state.registerSuccessMessage
)

export const getAllUserSelector = createSelector(
    authSelectoerFeature,
    (state) => state.getUsersSuccessMessage
)
console.log("After");
console.log(getAllUserSelector )

export const getUserSelector = createSelector(
    authSelectoerFeature,
    (state) => state.getUsersSuccessMessage
)