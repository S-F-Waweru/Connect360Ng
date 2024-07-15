import { Component, OnInit } from '@angular/core';
import { Poll } from '../Models/Poll';
import { PollsService } from '../Services/polls.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-polls',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './polls.component.html',
  styleUrl: './polls.component.css'
})
export class PollsComponent implements OnInit{
  polls!:Poll[]

  constructor(private ps : PollsService
  ){}
    
  ngOnInit(): void {
    this.polls = this.ps.getAllPolls()
  }
}
