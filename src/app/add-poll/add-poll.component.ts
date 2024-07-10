import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-poll',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-poll.component.html',
  styleUrl: './add-poll.component.css'
})
export class AddPollComponent implements OnInit {
  form!:FormGroup
  constructor(
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
    
  }
}
