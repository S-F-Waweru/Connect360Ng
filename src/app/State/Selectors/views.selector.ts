import { createFeatureSelector, createSelector } from "@ngrx/store"
import { ViewInterface } from "../Reducers/views.reducers"

const viewsSelectorFeature = createFeatureSelector<ViewInterface>('views')

export const getViewsSelector = createSelector(
    viewsSelectorFeature,
    (state)=>state.getViewsSuccessMessage
)

export const getViewSelector = createSelector(
    viewsSelectorFeature,
    (state)=>state.getViewSuccessMessage
)

export const getUserViewsSelectoer = createSelector(
    viewsSelectorFeature,
    (state)=>state.getUserViewsSuccessMessage
)