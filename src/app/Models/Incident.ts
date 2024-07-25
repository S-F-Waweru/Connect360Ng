export interface Incident {
    Id:string,
    Incident:string,
    Description:string,
    ImageURL:string,
    Location:string,
    UserId:string
}

export interface IncidentRequest {
    Incident:string,
    Description:string,
    ImageURL:string,
    Location:string
}
export interface IncidentResponse {
    Message : string
}