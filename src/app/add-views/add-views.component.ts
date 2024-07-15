import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ViewsService } from '../Services/views.service';

@Component({
  selector: 'app-add-views',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterModule],
  templateUrl: './add-views.component.html',
  styleUrl: './add-views.component.css'
})
export class AddViewsComponent {
  form!:FormGroup
  constructor(
    private fb:FormBuilder,
    private vs:ViewsService
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      Title: this.fb.control(null, Validators.required),
      Body : this.fb.control(null, Validators.required),
    })
  }


 
  onSubmit(){
    const id = Math.floor(Math.random()*1000)
    const newView = {id, ...this.form.value}
    this.vs.addView(newView)
  }

}
