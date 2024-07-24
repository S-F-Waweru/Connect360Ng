import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ViewsSummaryResponse } from '../Models/Views';

@Injectable({
  providedIn: 'root'
})
export class EducateService {
  constructor(
    private http :HttpClient,
  ){}
// 8000/ai/views
// 8000/ai/incidents
// 8000/ai/educate/bill



  private readonly baseURL='8000/ai/views'

  summerizeViews():Observable<ViewsSummaryResponse>{
    return this.http.get<ViewsSummaryResponse>(this.baseURL + 'views' )
  }

  summerizeIncidents():Observable<ViewsSummaryResponse>{
    return this.http.get<ViewsSummaryResponse>(this.baseURL + 'incidents' )
  }

  // ai chat
  // here
 

}
