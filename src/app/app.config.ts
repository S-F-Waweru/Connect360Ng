import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { provideToastr } from 'ngx-toastr';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authReducer } from './State/Reducers/auth.reducer';
import { AuthEffects } from './State/Effects/Auth.effects';
import { pollsReducer } from './State/Reducers/polls.reducers';
import { PollsEffect } from './State/Effects/polls.effects';
import { TokenInterceptor } from './Interceptor/token';
import { ViewsEffect } from './State/Effects/views.effects';
import { viewsReducer } from './State/Reducers/views.reducers';
import { IncidentAction } from './State/Actions/incidents.actions';
import { incidentEffect } from './State/Effects/incidents.effects';
import { incidentReducer } from './State/Reducers/incident.reducer';

export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes),
    provideAnimations(),
    provideToastr(),
    provideStore({auth:authReducer, polls:pollsReducer, views:viewsReducer, incidents:incidentReducer}),
    provideEffects([AuthEffects , PollsEffect, ViewsEffect, incidentEffect]),
    provideHttpClient(withInterceptors([TokenInterceptor]))
    ,provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
