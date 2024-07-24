import { createReducer, on } from "@ngrx/store";
import { View } from "../../Models/Views";
import { ViewsAction } from "../Actions/view.actions";


const emptyView ={
    Id : '',
    Title :'',
    Body:''   
}

export interface ViewInterface {
    addViewSuccessMessage: string,
    addViewErrorMessage: string,
    addViewLoading: boolean,


    getViewsSuccessMessage: View[],
    getViewsErrorMessage: string,
    getViewsLoading: boolean,

    getUserViewsSuccessMessage: View[],
    getUserViewsErrorMessage: string,
    getUserViewsLoading: boolean,


    getViewSuccessMessage: View,
    getViewErrorMessage: string,
    getViewLoading: boolean,

    updateViewSuccessMessage: string,
    updateViewErrorMessage: string,
    updateViewLoading: boolean,

    deleteViewSuccessMessage: string,
    deleteViewErrorMessage: string,
    deleteViewLoading: boolean,
}
const initialState: ViewInterface = {
    addViewSuccessMessage: '',
    addViewErrorMessage: '',
    addViewLoading: false,

    getViewsSuccessMessage: [],
    getViewsErrorMessage: '',
    getViewsLoading: false,

    getViewSuccessMessage: emptyView,
    getViewErrorMessage: '',
    getViewLoading: false,

    getUserViewsSuccessMessage:[],
    getUserViewsErrorMessage: '',
    getUserViewsLoading: false,

    updateViewSuccessMessage: '',
    updateViewErrorMessage: '',
    updateViewLoading: false,

    deleteViewSuccessMessage: '',
    deleteViewErrorMessage: '',
    deleteViewLoading: false,

}


export const viewsReducer = createReducer(
    initialState,


    // ADD TOUR-------------
    on(ViewsAction.viewsAdd, (state) => {
        return {
            ...state,
            addViewSuccessMessage: '',
            addViewErrorMessage: '',
            addViewLoading: true
        }
    }),

    on(ViewsAction.viewsAddSuccess, (state, action) => {
        return {
            ...state,
            addViewSuccessMessage: action.response.Message,
            addViewErrorMessage: '',
            addViewLoading: false
        }
    }),

    on(ViewsAction.viewsAddFailure, (state, action) => {
        return {
            ...state,
            addViewSuccessMessage: '',
            addViewErrorMessage: action.message,
            addViewLoading: false
        }
    }),


    // GET TOURS
    on(ViewsAction.getviews, (state) => {
        return {
            ...state,
            getViewsSuccessMessage: [],
            getViewsErrorMessage: '',
            getViewsLoading: true
        }
    }),

    on(ViewsAction.getviewsSuccess, (state, { views }) => {
        return {
            ...state,
            getViewsSuccessMessage: views,
            getViewsErrorMessage: '',
            getViewsLoading: false
        }
    }),

    on(ViewsAction.getviewsFailure, (state, action) => {
        return {
            ...state,
            getViewsSuccessMessage: [],
            getViewsErrorMessage: action.message,
            getViewsLoading: false
        }
    }),

    on(ViewsAction.getUserViews, (state) => {
        return {
            ...state,
            getUserViewsSuccessMessage: [],
            getUserViewsErrorMessage: '',
            getUserViewsLoading: true
        }
    }),

    on(ViewsAction.getUserViewsSuccess, (state, { views }) => {
        return {
            ...state,
            getUserViewsSuccessMessage: views,
            getUserViewsErrorMessage: '',
            getUserViewsLoading: false
        }
    }),

    on(ViewsAction.getUserViewsFailure, (state, action) => {
        return {
            ...state,
            getUserViewsSuccessMessage: [],
            getUserViewsErrorMessage: action.message,
            getUserViewsLoading: false
        }
    }),


    // GET TOUR
    on(ViewsAction.getview, (state) => {
        return {
            ...state,
            getViewSuccessMessage: emptyView,
            getViewErrorMessage: '',
            getViewLoading: true
        }
    }),

    on(ViewsAction.getviewSuccess, (state, {view}) => {
        return {
            ...state,
            getViewSuccessMessage: view,
            getViewErrorMessage: '',
            getViewLoading: false
        }
    }),

    on(ViewsAction.getviewFailure, (state, action) => {
        return {
            ...state,
            getViewSuccessMessage: emptyView,
            getViewErrorMessage: action.message,
            getViewLoading: false
        }
    }),

    //Update hotel
    on(ViewsAction.updateView, (state) => {
        return {
            ...state,
            updateViewSuccessMessage: '',
            updateViewErrorMessage: '',
            updateViewLoading: true
        }
    }),

    on(ViewsAction.updateViewSuccess, (state, action) => {
        return {
            ...state,
            updateViewSuccessMessage: action.responce.Message,
            updateViewErrorMessage: '',
            updateViewLoading: false
        }
    }),

    on(ViewsAction.updateViewFailure, (state, action) => {
        return {
            ...state,
            updateViewSuccessMessage: '',
            updateViewErrorMessage: action.message,
            updateViewLoading: false
        }
    }),

    //delete hotel

    on(ViewsAction.deleteView, (state) => {
        return {
            ...state,
            deleteViewSuccessMessage: '',
            deleteViewErrorMessage: '',
            deleteViewLoading: true
        }
    }),

    on(ViewsAction.deleteViewSuccess, (state, action) => {
        return {
            ...state,
            deleteViewSuccessMessage: action.responce.Message,
            deleteViewErrorMessage: '',
            deleteViewLoading: false
        }
    }),
    
    on(ViewsAction.deleteViewFailure, (state, action) => {
        return {
            ...state,
            deleteViewSuccessMessage: '',
            deleteViewErrorMessage: action.message,
            deleteViewLoading: false
        }
    }),
)