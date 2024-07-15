export interface EducateQuestion{
    Id: number
    UserId:number,
    Question:string,
}

export interface EducateResult{
    Id: number
    QuestionId:number
    UserId:number,
    Result:string
}