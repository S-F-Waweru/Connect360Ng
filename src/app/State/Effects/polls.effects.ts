import { Injectable } from "@angular/core";
import { createEffect, ofType } from "@ngrx/effects";
import { Actions } from "@ngrx/effects";
import { catchError, concat, concatMap, exhaustMap, map, of } from "rxjs";
import { PollsActions } from "../Actions/polls.actions";
import { PollsService } from "../../Services/polls.service";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class PollsEffect{
    constructor(
        private action$:Actions,
        private ps:PollsService,
        private toastr:ToastrService
    ){}

    addPoll$= createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(PollsActions.pollsAdd),
            exhaustMap((req)=>this.ps.addPoll(req.poll).pipe(
                map(res =>{
                    this.toastr.success('Poll Added')
                    return PollsActions.pollsAddSuccess({response:res})
                }),
                catchError(error => {
                    this.toastr.error('Poll Add Failed')

                   return of(PollsActions
                    .pollsAddFailure({message:error})
                )}
            )
                )
            )
        )
    })

    // getPoll$ = createEffect(()=>{
    //     return this.action$.pipe(
    //         concatMap(()=> this.ps.getPoll().pipe(
    //             map(poll =>{
    //                 return PollsActions.getPollsSuccess({poll:poll})
    //             }),
    //             catchError(error => of(PollsActions
    //                 .getPollsFailure({message:error})
    //             ))
    //         ))
            
    //     )
    // })

    getPolls$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(PollsActions.getPolls),
            concatMap(()=> this.ps.getPolls().pipe(
                map(polls =>{
                    return PollsActions.getPollsSuccess({polls:polls})
                }),
                catchError(error => of(PollsActions
                    .getPollsFailure({message:error})
                ))
            ))
            
        )
    })

    getVotes$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(PollsActions.getVotes),
            concatMap(()=> this.ps.getVotes().pipe(
                map(votes =>{
                    return PollsActions.getVotesSuccess({votes:votes})
                }),
                catchError(error => of(PollsActions
                    .getVotesFailure({message:error})
                ))
            ))
            
        )
    })

    vote$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(PollsActions.vote),
            concatMap((req)=> this.ps.vote(req.vote).pipe(
                map(res =>{
                    return PollsActions.voteSuccess({response:res})
                }),
                catchError(error => of(PollsActions
                    .voteFailure({message:error})
                ))
            ))
            
        )
    })
}