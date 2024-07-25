import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Incident } from '../Models/Incident';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { IncidentAction } from '../State/Actions/incidents.actions';
import { getAllIncidentsSelector } from '../State/Selectors/incidents.selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-incidents',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './incidents.component.html',
  styleUrl: './incidents.component.css'
})
export class IncidentsComponent implements OnInit{
  constructor(
    private store :Store<AppState>
  ){}

// incidents!:Incident[]

incidents$! :Observable<Incident[]>

userRole =''
  ngOnInit(){
    const Role = localStorage.getItem('Role') 
    if (Role){
      this.userRole = Role
      console.log(this.userRole);
      
    }


    this.store.dispatch(IncidentAction.getIncidents())
    this.store.subscribe(incidents =>{
      // if(incidents){
        // // this.incidents = [... incidents]
        // console.log(this.incidents)
        console.log('Here');
        
        console.log(incidents);
        
      // }
    })

    this.incidents$ = this.store.select(getAllIncidentsSelector)


}
}
