export interface Poll {
    Id:number;
    Question : string
    Choices: Choice[]
}

export interface Choice {
    Id : number
    Choice :string
}
export interface PollRequest {
    Question : string,
    Choices :Choice[]
}
export interface PollsResponse {
    message : string
}

export interface Vote{
    Id:string,
    QuestionId:string,
    ChoiceId:string,
    UserId:string,
}
export interface VoteRequest{
    QuestionId:string,
    ChoiceId:string,
}
export interface VoteResponse{
    Message:string
}