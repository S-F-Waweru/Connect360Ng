import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ViewsService } from '../Services/views.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { ViewsAction } from '../State/Actions/view.actions';
import { Observable } from 'rxjs';
import { View } from '../Models/Views';
import { getUserViewsSelectoer } from '../State/Selectors/views.selector';

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
    private store:Store<AppState>
  ){}


  // userViews$! :Observable<View[]>
   views!:View[]

  ngOnInit(): void {
    this.form = new FormGroup({
      Title: this.fb.control(null, Validators.required),
      Body : this.fb.control(null, Validators.required),
    })


    const UserId = localStorage.getItem('UserId')
    if(UserId){
      this.store.dispatch(ViewsAction.getUserViews({UserId}))
      this.store.select(getUserViewsSelectoer).subscribe(views =>{
          this.views = views
          console.log(this.views)
      }
      )
    }
  }


 
  onSubmit(){
   this.store.dispatch(ViewsAction.viewsAdd({view:this.form.value}))
}

deleteView(Id:string){
  this.store.dispatch(ViewsAction.deleteView({Id}))
}

}
