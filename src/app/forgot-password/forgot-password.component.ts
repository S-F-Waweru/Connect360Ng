import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthAction } from '../State/Actions/auth.actions';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  constructor( private store:Store<AppState>){}
  form!: FormGroup
  
  ngOnInit(): void {
   this.form = new FormGroup({
    Email : new FormControl(null,[Validators.required, Validators.email] ),
  
   }

   ) 
  }



  onSubmit(){
    this.store.dispatch(AuthAction.resetEmail({email: this.form.value}))
  }

}
