import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError, of, concatMap } from "rxjs";
import { ViewsService } from "../../Services/views.service";
import { ViewsAction } from "../Actions/view.actions";
import { ToastrService } from "ngx-toastr";



@Injectable()
export class ViewsEffect {
    constructor(
        private action$:Actions,
        private toastr :ToastrService,
        private hs :ViewsService
    ){}
    addView$= createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ViewsAction.viewsAdd),
            exhaustMap((req)=>this.hs.addView(req.view).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    this.toastr.success('View Added', res.Message)
                    return ViewsAction.viewsAddSuccess({response:res})
                }),
                catchError(error => {
                    this.toastr.error(error.message,'Adding Failed');
                   return of(ViewsAction.viewsAddFailure({message:error})
                )}
            )
                )
            )
        )
    }) 


    getViews$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(ViewsAction.getviews),
            concatMap(()=>this.hs.getViews().pipe(
                map(res => {
                    this.toastr.success('Showing all Views')
                    return ViewsAction.getviewsSuccess({views:res})
                }),
                catchError(error =>{
                    this.toastr.error(error.message,'Getting views Failed');
                    return  of(ViewsAction.
                        getviewsFailure({message:error})
                    )
                })
            ))
        )
    })


    getUSerViews$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(ViewsAction.getUserViews),
            concatMap((req)=>this.hs.getUserViews(req.UserId).pipe(
                map(res => {
                    this.toastr.success('Showing all User Views')

                    return ViewsAction.getUserViewsSuccess({views:res})
                }),
                catchError(error =>{
                    this.toastr.error(error.message,'Getting User views Failed');
                    return  of(ViewsAction.
                        getUserViewsFailure({message:error})
                    )
                })
            ))
        )
    })


    getView$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ViewsAction.getview),
            // ***
            exhaustMap((req)=>this.hs.getView(req.Id).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    this.toastr.success('Showing all User Views')
                    return ViewsAction.getviewSuccess({view:res})
                }),
                catchError(error => {
                    this.toastr.error(error.message,'Getting view Failed');
                    return of(ViewsAction
                        .getviewFailure({message:error})
                    )
                })
                )
            )
        )
    })  

    updateView$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ViewsAction.updateView),
            // ***
            concatMap((req)=>this.hs.updateView(req.Id, req.view).pipe(
                map(res =>{
                    this.toastr.success('Update Successful')
                    return ViewsAction.updateViewSuccess({responce:res})
                }),
                catchError(error => {
                    this.toastr.error(error.message,'Update view Failed');

                    return  of(ViewsAction
                        .updateViewFailure({message:error})
                    )
                })
                )
            )
        )
    }) 

    deleteView$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(ViewsAction.deleteView),
            // ***
            exhaustMap((req)=>this.hs.deleteView(req.Id).pipe(
                map(res =>{
                    console.log("WE are at effects sucess");
                    this.toastr.success('Delete View Successful')

                    return ViewsAction.deleteViewSuccess({responce:res})
                }),
                catchError(error => {
                    this.toastr.error(error.message,'Delete view Failed');
                    return of(ViewsAction
                        .deleteViewFailure({message:error})
                    )
                })
                )
            )
        )
    }) 

}