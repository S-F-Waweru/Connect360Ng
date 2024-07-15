import { Injectable } from '@angular/core';
import { Incident } from '../Models/Incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  incidents :Incident[]= []
  constructor() { }

  allIncidents(){
    return this.incidents
  }
  addIncident(newIncident:Incident){
    this.incidents.push(newIncident)
  }
  getIncident(Id:number){
    const incident = this.incidents.find(i=> i.Id == Id)
    if(!incident){
      console.log('No Incidents')
      return
    }
    return incident
  }
  deleteIncidents(id:number){
      return this.incidents.filter(i=> i.Id === id)
  }
  updateIncidents(id:number, updatedIncident:Incident){
    this.incidents.find(i=> {
      if(i.Id=== id){
          i = updatedIncident
      }
    })
  }
}
