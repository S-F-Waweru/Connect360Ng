import { Injectable } from '@angular/core';
import { Poll, PollRequest, PollsResponse, Vote, VoteRequest, VoteResponse } from '../Models/Poll';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  constructor(
    private http:HttpClient
  ){}
  private readonly baseUrl ="http://localhost:2000/polls"

  //add poll
  addPoll(addPoll:PollRequest):Observable<PollsResponse>{
    console.log(addPoll);
    
    console.log('Adding Polls')
    return this.http.post<PollsResponse>(this.baseUrl  + '/add', addPoll)  
  }
  //getpolls
  getPolls():Observable<Poll[]>{
    console.log('Polls service :getting Polls');
    
    return this.http.get<Poll[]>(this.baseUrl)  
  }

  getPoll(Id:string):Observable<Poll>{
    return this.http.get<Poll>(this.baseUrl + Id)  
  }

  vote(vote:VoteRequest):Observable<VoteResponse>{
    return this.http.post<VoteResponse>(this.baseUrl + '/vote' ,vote)  
  }  
  getVotes():Observable<Vote[]>{
    return this.http.get<Vote[]>(this.baseUrl + '/votes')  
  }
}
