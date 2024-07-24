import { AuthInterface } from "./Reducers/auth.reducer";
import { PollsInterface } from "./Reducers/polls.reducers";
import { ViewInterface } from "./Reducers/views.reducers";

export interface AppState {
    auth : AuthInterface,
    polls :PollsInterface,
    views:ViewInterface
}