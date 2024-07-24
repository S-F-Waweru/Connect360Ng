import { createReducer, on } from "@ngrx/store"
import { PollsActions } from "../Actions/polls.actions"
import { Action } from "rxjs/internal/scheduler/Action"
import { Poll, Vote } from "../../Models/Poll"
import { act } from "@ngrx/effects"
import { state } from "@angular/animations"

export interface PollsInterface {
    pollsAddSuccessMessage: string
    pollsAddErrorMessage: string
    pollsAddLoading: boolean

    getPollsSuccessMessage: Poll[],
    getPollsErrorMessage: string,
    getPollsLoading: boolean,

    getPollSuccessMessage: Poll|null,
    getPollErrorMessage: string,
    getPollLoading: boolean,

    getVotesSuccessMessage:Vote[],
    getVotesErrorMessage: string,
    getVotesLoading: boolean,

   voteSuccessMessage: string,
   voteErrorMessage: string,
   voteLoading: boolean,
}

export const initialState:PollsInterface = {
    pollsAddSuccessMessage: '',
    pollsAddErrorMessage: '',
    pollsAddLoading: false,

    getPollsSuccessMessage: [],
    getPollsErrorMessage: '',
    getPollsLoading: false,

    getPollSuccessMessage:null,
    getPollErrorMessage: '',
    getPollLoading: false,

    getVotesSuccessMessage: [],
    getVotesErrorMessage: '',
    getVotesLoading: false,

   voteSuccessMessage: '',
   voteErrorMessage: '',
   voteLoading: false,
}

export const pollsReducer = createReducer(
    initialState,
    on(PollsActions.pollsAdd, (state) => {
        return {
            ...state,
            pollsAddSuccessMessage: '',
            pollsAddErrorMessage: '',
            pollsAddLoading: true
        }
    }),
    on(PollsActions.pollsAddSuccess, (state, action) => {
        return {
            ...state,
            pollsAddSuccessMessage: action.response.message,
            pollsAddErrorMessage: '',
            pollsAddLoading: false
        }
    }),
    on(PollsActions.pollsAddFailure, (state, action) => {
        return {
            ...state,
            pollsAddSuccessMessage: '',
            pollsAddErrorMessage: action.message,
            pollsAddLoading: false
        }
    }),



    // GET Polls
    on(PollsActions.getPolls, (state) => {
        return {
            ...state,
            getpollsSuccessMessage: [],
            getpollsErrorMessage: '',
            getpollsLoading: true
        }
    }),

    on(PollsActions.getPollsSuccess, (state, action) => {
        return {
            ...state,
            getpollsSuccessMessage: action.polls,
            getpollsErrorMessage: '',
            getpollsLoading: false
        }
    }),

    on(PollsActions.getPollsFailure, (state, action) => {
        return {
            ...state,
            getPollssSuccessMessage: [],
            getpollsErrorMessage: action.message,
            getpollsLoading: false
        }
    }),

    // GET Poll
    on(PollsActions.getPoll, (state) => {
        return {
            ...state,
            getpollSuccessMessage: [],
            getpollErrorMessage: '',
            getpollLoading: true
        }
    }),

    on(PollsActions.getPollSuccess, (state, action) => {
        return {
            ...state,
            getpollSuccessMessage: action.poll,
            getpollErrorMessage: '',
            getpollLoading: false
        }
    }),

    on(PollsActions.getPollFailure, (state, action) => {
        return {
            ...state,
            getpollSuccessMessage: [],
            getpollErrorMessage: action.message,
            getpollLoading: false
        }
    }),


    //get Votes
    on(PollsActions.getVotes, (state) => {
        return {
            ...state,
            getVotesSuccessMessage: [],
            getVotesErrorMessage: '',
            getVotesLoading: true
        }
    }),

    on(PollsActions.getVotesSuccess, (state,{votes}) => {
        return{
            ...state,
            getVotesSuccessMessage:votes,
            getVotesErrorMessage: '',
            getVotesLoading: true
        }
    }),

    on(PollsActions.getVotesFailure, (state, action) => {
        return {
            ...state,
            getVotesSuccessMessage: [],
            getVotesErrorMessage:action.message ,
            getVotesLoading: false
        }
    }),
    

    //Vote
        // GET Polls
        on(PollsActions.vote, (state) => {
            return {
                ...state,
               voteSuccessMessage: '',
               voteErrorMessage: '',
               voteLoading: true
            }
        }),
    
        on(PollsActions.voteSuccess, (state, action) => {
            return {
                ...state,
               voteSuccessMessage: action.response.Message,
               voteErrorMessage: '',
               voteLoading: false
            }
        }),
    
        on(PollsActions.voteFailure, (state, action) => {
            return {
                ...state,
               voteSuccessMessage: '',
               voteErrorMessage: action.message,
               voteLoading: false
            }
        }),
    

)