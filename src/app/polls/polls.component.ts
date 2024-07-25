import { Component, OnInit } from '@angular/core';
import { Poll } from '../Models/Poll';
import { PollsService } from '../Services/polls.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { PollsActions } from '../State/Actions/polls.actions';
import { getPollsSelector } from '../State/Selectors/polls.selector';


@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent implements OnInit{
  polls!:Poll[]
  
  
  userRole = ''

  constructor(
    private store : Store<AppState>
  ){}
    
  ngOnInit(): void {
    // all polld
    const Role = localStorage.getItem('Role') 
    if (Role){
      this.userRole = Role
    }


   this.store.dispatch(PollsActions.getPolls())
    this.store.select(getPollsSelector).subscribe(polls =>{
      this.polls = polls
      console.log(polls)
    })

   //get all votes
  //  this.store.dispatch(PollsActions.getVotes())
  
  }
}
