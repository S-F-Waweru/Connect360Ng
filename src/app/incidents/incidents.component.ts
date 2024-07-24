import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Incident } from '../Models/Incident';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { IncidentAction } from '../State/Actions/incidents.actions';
import { getAllIncidentsSelector } from '../State/Selectors/incidents.selectors';

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

incidents!:Incident[]

userRole =''
  ngOnInit(): void {
    const Role = localStorage.getItem('Role') 
    if (Role){
      this.userRole = Role
    }

    this.store.dispatch(IncidentAction.getIncidents())
    this.store.select(getAllIncidentsSelector).subscribe(incidents =>{
      if(incidents){
        this.incidents = incidents
        console.log(this.incidents)
        console.log('hello');
        
      }
    })


}
}
