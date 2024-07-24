import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { ViewsAction } from '../State/Actions/view.actions';
import { Observable } from 'rxjs';
import { View } from '../Models/Views';
import { getUserViewsSelectoer, getViewSelector, getViewsSelector } from '../State/Selectors/views.selector';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-update-views',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterModule],
  templateUrl: './update-views.component.html',
  styleUrl: './update-views.component.css'
})
export class UpdateViewsComponent {
  form!:FormGroup
  constructor(
    private fb:FormBuilder,
    private activeRoute : ActivatedRoute,
    private store :Store<AppState>
  ){}

userViews$!:Observable<View[]>
updateViewId!:string
  ngOnInit(): void {
    this.form = new FormGroup({
      Title: this.fb.control(null, Validators.required),
      Body: this.fb.control(null, Validators.required)

    })

    const UserId = localStorage.getItem('UserId')

  if(UserId){
        this.store.dispatch(ViewsAction.getUserViews({UserId}))
        this.userViews$ = this.store.select(getUserViewsSelectoer)
      }

    this.activeRoute.paramMap.subscribe(params =>{
      const updateView = params.get('id')
      if(updateView){   
        this.updateViewId = updateView     
      this.store.dispatch(ViewsAction.getviews())

      this.store.select(getViewsSelector).subscribe(views => {
        if(views){   
           const view = views.filter(v => v.Id === updateView)
           console.log(view[0])

           this.form.patchValue({
            Title:view[0].Title,
            Body :view[0].Body
           })

          }


        
        
       
      })
      }

     

    
     
    })

  }






  get choices():FormArray {
    return this.form.get('Choices') as FormArray;
  }
  addChoice(){
    this.choices.push(new FormControl('', Validators.required))
  }
  onSubmit(){
    console.log(this.updateViewId);

    this.store.dispatch(ViewsAction.updateView({Id:this.updateViewId, 
      view :this.form.value
    }))
    
  }

  deleteView(Id:string){
    this.store.dispatch(ViewsAction.deleteView({Id}))
  }

}
