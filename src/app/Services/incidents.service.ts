import { Injectable } from '@angular/core';
import { Incident, IncidentRequest, IncidentResponse } from '../Models/Incident';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  constructor(
    private http :HttpClient,
  ){}

  private readonly baseURL='http://localhost:2000'

  addIncident(addincident:IncidentRequest):Observable<IncidentResponse>{
    return this.http.post<IncidentResponse>(this.baseURL +  '/incidents/' +'add' , addincident)
  }

  getIncident(Id :string):Observable<Incident>{
    return  this.http.get<Incident>(this.baseURL + '/incidents/' + Id)
  }
  getIncidents():Observable<Incident[]>{
    return  this.http.get<Incident[]>(this.baseURL + '/incidents/' )
  }
  updateIncident(Id:string, updatedincident:Incident):Observable<IncidentResponse>{
    return  this.http.put<IncidentResponse>(this.baseURL + '/incidents/' + Id , updatedincident )

  }
  deleteIncident(Id :string):Observable<IncidentResponse>{
    return  this.http.delete<IncidentResponse>(this.baseURL + '/incidents/' + Id)
  }

}

