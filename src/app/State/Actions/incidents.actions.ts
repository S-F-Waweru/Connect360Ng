import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Incident, IncidentResponse } from "../../Models/Incident";

export const IncidentAction = createActionGroup({
    source: 'INCIDENTS API',
    events :{
        // add
        'incident add' : props<{incident:Incident}>(),
        'incident add Success' : props<{response:IncidentResponse}>(),
        'incident add Failure' : props<{message:string}>(),

        ' getIncident ' : props<{Id:string}>(),
        ' getIncident Success' : props<{incident:Incident}>(),
        ' getIncident Failure' : props<{message:string}>(),


        ' getIncidents' :emptyProps(),
        ' getIncidents Success' : props<{incidents:Incident[]}>(),
        ' getIncidents Failure' : props<{message:string}>(),

        ' updateIncidents' : props<{Id:string, incident:Incident}>(),
        ' updateIncidents Success' : props<{response: IncidentResponse}>(),
        ' updateIncidents Failure' : props<{messege:string}>(),

        ' deleteIncident' : props<{Id:string}>(),
        ' deleteIncident Success' : props<{response: IncidentResponse}>(),
        ' deleteIncident Failure' : props<{messege:string}>(),

    }
})
