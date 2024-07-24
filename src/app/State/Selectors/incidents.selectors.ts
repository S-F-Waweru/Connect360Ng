import { createFeatureSelector, createSelector } from "@ngrx/store"
import { IncidentInterface } from "../Reducers/incident.reducer"

const IncidentSelectoerFeature = createFeatureSelector<IncidentInterface>('incidents')

export const getAllIncidentsSelector = createSelector(
    IncidentSelectoerFeature,
    (state)=>state.getIncidentsSuccessMessage
)