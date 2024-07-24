import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewsAction } from '../State/Actions/view.actions';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { View } from '../Models/Views';
import { getViewSelector, getViewsSelector } from '../State/Selectors/views.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {

  constructor(
    private activeRoute : ActivatedRoute ,
    private route :Router,
    private store : Store<AppState>
  ){}


  // view$!:Observable<View>
  view!:View
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(params =>{

      const viewId = params.get('id')

      if(viewId){
          this.store.dispatch(ViewsAction.getviews())

          this.store.select(getViewsSelector).subscribe(views =>{
              const view = views.filter(v => v.Id === viewId)
              this.view = view[0]
          })
          // this.store.select(getViewSelector).subscribe(view =>{
          //   this.view = view
          // })

          // this.view$ = this.store.select(getViewSelector)
      }
    })



  }


  home(){
    this.route.navigate(['views'])
  }


}