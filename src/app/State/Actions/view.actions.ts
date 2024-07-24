import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Poll, Vote, VoteRequest, VoteResponse } from "../../Models/Poll";
import { View, ViewRequest, ViewResponse } from "../../Models/Views";

export const ViewsAction = createActionGroup({
    source : 'VIEWS API',
    events : {
        'views add' : props<{view :ViewRequest}>(),
        'views add success' :props<{response : ViewResponse}>(),
        'views add failure' :props<{message : string}>(),

        'getviews':emptyProps(),
        'getviews success':props<{views : View[]}>(),
        'getviews failure':props<{message:string}>(),

        
        'getUserViews':props<{UserId:string}>(),
        'getUserViews success':props<{views : View[]}>(),
        'getUserViews failure':props<{message:string}>(),

        'getview':props<{Id:string}>(),
        'getview success':props<{view : View}>(),
        'getview failure':props<{message:string}>(),

        'updateView':props<{Id : string, view:ViewRequest}>(),
        'updateView success':props<{responce : ViewResponse}>(),
        'updateView failure':props<{message:string}>(),
        
        'deleteView':props<{Id : string}>(),
        'deleteView success':props<{responce : ViewResponse}>(),
        'deleteView failure':props<{message:string}>(),
        
      
    }
})