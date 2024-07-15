export interface Poll {
    id:number;
    question : string
    choices: Choice[]
}

export interface Choice {
    id : number
    choice :string
}