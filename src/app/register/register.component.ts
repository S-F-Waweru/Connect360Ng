import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthAction } from '../State/Actions/auth.actions';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterRequest } from '../Models/Auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,FormsModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form! : FormGroup

  constructor( 
    private store:Store<AppState>,
  ){}




  ngOnInit(): void {
    console.log('HIHI');
    
   this.form = new FormGroup({
    Username :new FormControl(null, Validators.required),
    Email : new FormControl(null,[Validators.required, Validators.email] ),
    Password : new FormControl(null,[Validators.required,this.passwordValidator.bind(this) ]),
    Role :new FormControl(null, Validators.required),
   }

   ) 
  }

  // onSubmit(){
  //   console.log(this.form.value);
  //   // this.as.register(this.form.value)
  //   // // this.toastr.success('User Added sucefully', 'success')
  //   // console.log( this.as.getUsers())
  //   // this.route.navigate([''])
  // }


  onSubmit(){
    const{Username, Email,Password, Role} = this.form.value
    const user:RegisterRequest = {Username, Email, Password, Role}
    this.store.dispatch(AuthAction.register({user:user}))
    console.log('Register:Onsubmit here');
    
  }

  
  /// password Validator
  passwordValidator(control:FormControl):{[x:string]:Boolean} | null{
    const value = control.value;
    if (value == undefined) {
      console.log('Value undefined')
      return  {passwordValidator :true} ; // Or handle this case as per your application's logic
    }
    let hasDigit = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;
  
    for (let i = 0; i < control.value.length; i++) {
      let charCode = control.value.charCodeAt(i);
  
      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasLowerCase = true;
      } else if (charCode >= 65 && charCode <= 90) {
        hasUpperCase = true;
      } else if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        hasSpecialChar = true;
      }// check patterns
    }

    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar){
      console.log('good control')
      return null
    }else{
      console.log('bad control')

      return {passwordValidator :true}
    }
  
  }
}
