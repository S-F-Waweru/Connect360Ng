import { Injectable } from '@angular/core';
import { View, ViewRequest, ViewResponse } from '../Models/Views';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {

  constructor(
    private http:HttpClient
  ){}
  private readonly baseURL ='http://localhost:2000/views/'

  addView(addincident:ViewRequest):Observable<ViewResponse>{
    return this.http.post<ViewResponse>(this.baseURL+'add' , addincident)
  }

  getView(Id :string):Observable<View>{
    return  this.http.get<View>(this.baseURL + 'view/'  +  Id)
  }
  getViews():Observable<View[]>{
    return  this.http.get<View[]>(this.baseURL )
  }
  getUserViews(userId:string):Observable<View[]>{
    return  this.http.get<View[]>(this.baseURL + userId)
  }

  updateView(Id:string, updatedincident:ViewRequest):Observable<ViewResponse>{
    return  this.http.put<ViewResponse>(this.baseURL +  '/update/'+ Id , updatedincident )

  }
  deleteView(Id :string):Observable<ViewResponse>{
    return  this.http.delete<ViewResponse>(this.baseURL + '/delete/'+ Id)
  }
 
}
