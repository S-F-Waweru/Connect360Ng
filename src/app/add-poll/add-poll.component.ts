import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthAction } from '../State/Actions/auth.actions';
import { PollsActions } from '../State/Actions/polls.actions';

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
    private fb:FormBuilder,
    private store:Store<AppState>
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

  removeChoice(i:number){
    this.choices.removeAt(i);
  }
  onSubmit(){
    // console.log(this.form.value)
    // console.log(this.form.value)
    this.store.dispatch(PollsActions.pollsAdd({poll:this.form.value}))
  }
}
