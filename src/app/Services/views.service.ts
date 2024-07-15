import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  views :View[]= []
  constructor() { }

  allViews(){
    return this.views
  }
  addView(newView:View){
    this.views.push(newView)
  }
  getView(Id:number){
    const View = this.views.find(i=> i.Id == Id)
    if(!View){
      console.log('No Views')
      return
    }
    return View
  }
  deleteViews(id:number){
      return this.views.filter(i=> i.Id === id)
  }
  updateViews(id:number, updatedView:View){
    this.views.find(i=> {
      if(i.Id=== id){
          i = updatedView
      }
    })
  }
}
