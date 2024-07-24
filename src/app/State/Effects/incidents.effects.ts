import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map, catchError, of, concatMap } from "rxjs";
import { IncidentsService } from "../../Services/incidents.service";
import { IncidentAction } from "../Actions/incidents.actions";
import { ToastrService } from "ngx-toastr";




@Injectable()
export class incidentEffect {
    constructor(
        private action$:Actions,
        private is :IncidentsService,
        private toastr:ToastrService
    ){}
    addIncident$= createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(IncidentAction.incidentAdd),
            exhaustMap((req)=>this.is.addIncident(req.incident).pipe(
                map(res =>{
                    this.toastr.success('Incidenst added')
                    return IncidentAction.incidentAddSuccess({response:res})
                }),
                catchError(error =>{
                    this.toastr.error('Incident add Failed')
                    return  of(IncidentAction
                        .incidentAddFailure({message:error})
                    )
                })
                )
            )
        )
    }) 


    getIncidensts$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(IncidentAction.getIncidents),
            concatMap(()=>this.is.getIncidents().pipe(
                map(res => {
                    this.toastr.success('All Incidensts')
                    return IncidentAction.getIncidentsSuccess({incidents:res})
                }),
                catchError(error => {
                    this.toastr.error('Get Incidensts Fail')
                    return of(IncidentAction.
                        getIncidentsFailure({message:error})
                    )
                })
            ))
        )
    })

    getIncident$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(IncidentAction.getIncident),
            // ***
            exhaustMap((req)=>this.is.getIncident(req.Id).pipe(
                map(res =>{
                    this.toastr.success('Incidenst Gotten')
                    return IncidentAction.getIncidentSuccess({incident:res})
                }),
                catchError(error => {
                    this.toastr.error('Get Incidenst Fail')
                    return of(IncidentAction.
                        getIncidentFailure({message:error})
                    )
                })
                )
            )
        )
    })  

    updateIncident$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(IncidentAction.updateIncidents),
            // ***
            concatMap((req)=>this.is.updateIncident(req.Id, req.incident).pipe(
                map(res =>{
                    this.toastr.success('Incident Update Sucess')

                    return IncidentAction.updateIncidentsSuccess({response:res})
                }),
                catchError(error => {
                    this.toastr.error('Incident Update Failed')
                    return of(IncidentAction
                        .updateIncidentsFailure({messege:error})
                    )
                })
                )
            )
        )
    }) 

    deleteIncident$ = createEffect(()=>{
        console.log("WE are at effects");
        return this.action$.pipe(
            ofType(IncidentAction.deleteIncident),
            // ***
            concatMap((req)=>this.is.deleteIncident(req.Id).pipe(
                map(res =>{
                    this.toastr.success('Incident deleted')
                    return IncidentAction.deleteIncidentSuccess({response:res})
                }),
                catchError(error => {
                    this.toastr.error('Delete attempt Failed')
                    
                    return of(IncidentAction
                        .deleteIncidentFailure({messege:error})
                    )
                })
                )
            )
        )
    }) 

}