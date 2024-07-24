export interface View {
    Id : string,
    Title :string,
    Body:string   
}

export interface ViewRequest {
    Title :string,
    Body:string   
}


export interface ViewResponse{
    Message :string
}

export interface ViewsSummaryResponse{
    Summary :string
}