import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IncidentsService } from '../Services/incidents.service';

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
    private is :IncidentsService
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      Incident:this.fb.control(null, Validators.required),
      Description:this.fb.control(null, Validators.required),
      PhotoUrl:this.fb.control(null, Validators.required),
      Location:this.fb.control(null, Validators.required), 
    })
  }


  
  onSubmit(){
    const id = Math.floor(Math.random()*1000)
    const newIncident = {id, ...this.form.value} 

    this.is.addIncident(newIncident)
  }

}
