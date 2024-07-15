import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educate',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './educate.component.html',
  styleUrl: './educate.component.css'
})
export class EducateComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private route:Router
  ){}
  form!:FormGroup
  ngOnInit(): void {
   this.form = new FormGroup ({
    Question :this.fb.control(null, Validators.required)
   })
  }
  onSubmit(){
    const id= Math.floor(Math.random()*1000)
    const userID = localStorage.getItem('UserId')
    if(userID){
      const newquestion = {userID,id,...this.form.value}
    }else{
        this.route.navigate(['login'])
    }
    
  }

}
