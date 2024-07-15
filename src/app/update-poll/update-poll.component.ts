import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Poll } from '../Models/Poll';
import { PollsService } from '../Services/polls.service';

@Component({
  selector: 'app-update-poll',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-poll.component.html',
  styleUrl: './update-poll.component.css'
})
export class UpdatePollComponent {
  form!:FormGroup

  polls!:Poll[]
    

  constructor(
    private ps : PollsService,
    private fb:FormBuilder
  ){}

  ngOnInit(): void {
    this.form = new FormGroup({
      Question: this.fb.control(null, Validators.required),
      Choices : this.fb.array([])
    })
  }


  get choices():FormArray {
    return this.form.get('Choices') as FormArray;
  }
  addChoice(){
    this.choices.push(new FormControl('', Validators.required))
  }
  onSubmit(){
    const id = Math.floor(Math.random()*100)
    
  }
}
