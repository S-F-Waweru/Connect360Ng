import { createReducer, emptyProps, on } from "@ngrx/store";

import { Incident } from "../../Models/Incident";
import { IncidentAction } from "../Actions/incidents.actions";


const emptyIncident = {
    Id: '',
    Incident: '',
    Description: '',
    PhotoUrl: '',
    Location: ''
}

export interface IncidentInterface {
    addIncidentSuccessMessage: string,
    addIncidentErrorMessage: string,
    addIncidentLoading: boolean,

    getIncidentSuccessMessage: Incident,
    getIncidentErrorMessage: string,
    getIncidentLoading: boolean,

    getIncidentsSuccessMessage: Incident[],
    getIncidentsErrorMessage: string,
    getIncidentsLoading: boolean,

    updateIncidentsSuccessMessage: string,
    updateIncidentsErrorMessage: string,
    updateIncidentsLoading: boolean,

    deleteIncidentsSuccessMessage: string,
    deleteIncidentsErrorMessage: string,
    deleteIncidentsLoading: boolean,


}
const initialState: IncidentInterface = {
    addIncidentSuccessMessage: '',
    addIncidentErrorMessage: '',
    addIncidentLoading: false,

    getIncidentsSuccessMessage: [],
    getIncidentsErrorMessage: '',
    getIncidentsLoading: false,

    getIncidentSuccessMessage: emptyIncident,
    getIncidentErrorMessage: '',
    getIncidentLoading: false,

    updateIncidentsSuccessMessage: '',
    updateIncidentsErrorMessage: '',
    updateIncidentsLoading: false,

    deleteIncidentsSuccessMessage: '',
    deleteIncidentsErrorMessage: '',
    deleteIncidentsLoading: false,
}


export const incidentReducer = createReducer(
    initialState,


    // ADD TOUR-------------
    on(IncidentAction.incidentAdd, (state) => {
        return {
            ...state,
            addIncidentSuccessMessage: '',
            addIncidentErrorMessage: '',
            addIncidentLoading: true
        }
    }),

    on(IncidentAction.incidentAddSuccess, (state, action) => {
        return {
            ...state,
            addIncidentSuccessMessage: action.response.Message,
            addIncidentErrorMessage: '',
            addIncidentLoading: false
        }
    }),

    on(IncidentAction.incidentAddFailure, (state, action) => {
        return {
            ...state,
            addIncidentSuccessMessage: '',
            addIncidentErrorMessage: action.message,
            addIncidentLoading: false
        }
    }),



    on(IncidentAction.getIncident, (state) => {
        return {
            ...state,
            getIncidentSuccessMessage: emptyIncident,
            getIncidentErrorMessage: '',
            getIncidentLoading: true
        }
    }),

    on(IncidentAction.getIncidentSuccess, (state, action) => {
        return {
            ...state,
            getIncidentSuccessMessage: action.incident,
            getIncidentErrorMessage: '',
            getIncidentLoading: false
        }
    }),

    on(IncidentAction.getIncidentFailure, (state, action) => {
        return {
            ...state,
            getIncidentSuccessMessage: emptyIncident,
            getIncidentErrorMessage: action.message,
            getIncidentLoading: false
        }
    }),



    on(IncidentAction.getIncidents, (state) => {
        return {
            ...state,
            getIncidentsSuccessMessage: [],
            getIncidentsErrorMessage: '',
            getIncidentsLoading: true,
        }
    }),

    on(IncidentAction.getIncidentsSuccess, (state, action) => {
        return {
            ...state,
            getIncidentsSuccessMessage: action.incidents,
            getIncidentsErrorMessage: '',
            getIncidentsLoading: false,
        }
    }),

    on(IncidentAction.getIncidentsFailure, (state, action) => {
        return {
            ...state,
            getIncidentsSuccessMessage: [],
            getIncidentsErrorMessage: action.message,
            getIncidentsLoading: false,
        }
    }),


    on(IncidentAction.updateIncidents, (state) => {
        return {
            ...state,
            updateIncidentSuccessMessage: emptyIncident,
            updateIncidentErrorMessage: '',
            updateIncidentLoading: true
        }
    }),

    on(IncidentAction.updateIncidentsSuccess, (state, action) => {
        return {
            ...state,
            updateIncidentSuccessMessage: action.response.Message,
            updateIncidentErrorMessage: '',
            updateIncidentLoading: false
        }
    }),

    on(IncidentAction.updateIncidentsFailure, (state, action) => {
        return {
            ...state,
            updateIncidentSuccessMessage: emptyIncident,
            updateIncidentErrorMessage: action.messege,
            updateIncidentLoading: false
        }
    }),


    on(IncidentAction.deleteIncident, (state) => {
        return {
            ...state,
            deleteIncidentSuccessMessage: '',
            deleteIncidentErrorMessage: '',
            deleteIncidentLoading: true
        }
    }),

    on(IncidentAction.deleteIncidentSuccess, (state, action) => {
        return {
            ...state,
            deleteIncidentSuccessMessage: action.response.Message,
            deleteIncidentErrorMessage: '',
            deleteIncidentLoading: false
        }
    }),

    on(IncidentAction.deleteIncidentFailure, (state, action) => {
        return {
            ...state,
            deleteIncidentSuccessMessage: '',
            deleteIncidentErrorMessage: action.messege,
            deleteIncidentLoading: false
        }
    }),
)