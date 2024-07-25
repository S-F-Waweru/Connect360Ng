import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IncidentsService } from '../Services/incidents.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { IncidentAction } from '../State/Actions/incidents.actions';
import { getAllUserSelector } from '../State/Selectors/auth.selectoer';
import { getAllIncidentsSelector } from '../State/Selectors/incidents.selectors';
import { View } from '../Models/Views';
import { Incident } from '../Models/Incident';

@Component({
  selector: 'app-add-incident',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],

  templateUrl: './add-incident.component.html',
  styleUrl: './add-incident.component.css'
})
export class AddIncidentComponent {
  form!:FormGroup
  constructor(
    private fb:FormBuilder,
    // private is :IncidentsService
    private store : Store<AppState>
  ){}

  userIncidents!:Incident[]

  ngOnInit(): void {
    this.form = new FormGroup({
      Incident:this.fb.control(null, Validators.required),
      Description:this.fb.control(null, Validators.required),
      ImageURL:this.fb.control('https://images.unsplash.com/photo-1605806616949-1e87b487fc2f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', Validators.required),
      Location:this.fb.control(null, Validators.required), 
    })

    const UserId = localStorage.getItem('UserId')
    // getuserView
    this.store.dispatch(IncidentAction.getIncidents())
    this.store.select(getAllIncidentsSelector).subscribe(incidents => {
      if(UserId){
        this.userIncidents = incidents.filter(i => i.UserId === UserId)
        console.log(this.userIncidents)
      }

    })
  }


  
  onSubmit(){
    console.log(this.form.value)
    
    this.store.dispatch(IncidentAction.incidentAdd({incident:this.form.value}))
  }


  delete(Id:string){
    this.store.dispatch(IncidentAction.deleteIncident({Id}))
  }
}
