import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AuthInterface } from "../Reducers/auth.reducer"
import { PollsInterface } from "../Reducers/polls.reducers"

const pollsSelectoerFeature = createFeatureSelector<PollsInterface>('polls')

export const getPollsSelector = createSelector(
    pollsSelectoerFeature,
    (state)=>state.getPollsSuccessMessage
)