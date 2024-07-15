import { Injectable } from '@angular/core';
import { Poll } from '../Models/Poll';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  polls:Poll[] = []

  constructor() { }

  getAllPolls(){
    return this.polls
  }

  getPoll(id :number){
    return this.polls.find(p => p.id === id)
  }

  addPoll(newPoll:Poll
  ){
    this.polls.push(newPoll)
  }
  deletePoll(id:number){
    this.polls.filter(P=> P.id != id)
  }
}
