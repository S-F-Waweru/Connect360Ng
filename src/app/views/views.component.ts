import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { ViewsAction } from '../State/Actions/view.actions';
import { Observable } from 'rxjs';
import { View } from '../Models/Views';
import { getViewsSelector } from '../State/Selectors/views.selector';

@Component({
  selector: 'app-views',
  standalone: true,
  imports: [RouterModule, CommonModule,],
  templateUrl: './views.component.html',
  styleUrl: './views.component.css'
})
export class ViewsComponent implements OnInit {
  constructor(
    private route:Router,
    private store :Store<AppState>
  ) {}
  // views$!:Observable<View[]>
  views!:View[]


  userRole:string =''
  ngOnInit(): void {
    const Role = localStorage.getItem('Role') 
    if (Role){
      this.userRole = Role
    }
   this.store.dispatch(ViewsAction.getviews())

  this.store.select(getViewsSelector).subscribe(views =>{
    this.views = views
    console.log(this.views)
  })
   
  }


  readMore(id:string){
    //navigate to view
    this.route.navigate(['views', 'view', id])
  }
}
