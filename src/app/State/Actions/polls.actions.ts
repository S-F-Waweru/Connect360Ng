import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Poll, PollRequest, PollsResponse, Vote, VoteRequest, VoteResponse } from "../../Models/Poll";

export const PollsActions = createActionGroup({
    source :'POLLS API',
    events : {
        'polls add' : props<{poll : PollRequest}>(),
        'polls add success' :props<{response : PollsResponse}>(),
        'polls add failure' :props<{message : string}>(),

        'getPolls':emptyProps(),
        'getPolls success':props<{polls : Poll[]}>(),
        'getPolls failure':props<{message:string}>(),

        'getPoll':emptyProps(),
        'getPoll success':props<{poll : Poll}>(),
        'getPoll failure':props<{message:string}>(),
        
        'getVotes' :emptyProps(),
        'getVotes success':props<{votes:Vote[]}>(),
        'getVotes failure':props<{message:string}>(),

        'vote' : props<{vote: VoteRequest}>(),
        'vote success' :props<{response : VoteResponse}>(),
        'vote failure':props<{message:string}>(),
    }
})