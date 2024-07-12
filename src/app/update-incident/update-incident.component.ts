import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-update-incident',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './update-incident.component.html',
  styleUrl: './update-incident.component.css'
})
export class UpdateIncidentComponent {
  form!:FormGroup
  constructor(
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      Title: this.fb.control(null, Validators.required),
      Choices : this.fb.array([])
    })
  }


  get choices():FormArray {
    return this.form.get('Choices') as FormArray;
  }
  addChoice(){
    this.choices.push(new FormControl('', Validators.required))
  }
  onSubmit(){}

}
