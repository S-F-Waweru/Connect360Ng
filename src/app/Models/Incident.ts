export interface Incident {
    Id:string,
    Incident:string,
    Description:string,
    PhotoUrl:string,
    Location:string
}

export interface IncidentRequest {
    Incident:string,
    Description:string,
    PhotoUrl:string,
    Location:string
}
export interface IncidentResponse {
    Message : string
}