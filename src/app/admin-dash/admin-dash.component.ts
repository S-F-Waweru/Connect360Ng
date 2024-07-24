import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthAction } from '../State/Actions/auth.actions';
import { getAllUserSelector } from '../State/Selectors/auth.selectoer';
import { CommonModule } from '@angular/common';
import { User } from '../Models/Auth';
import { firstValueFrom, Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-admin-dash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dash.component.html',
  styleUrl: './admin-dash.component.css'
})
export class AdminDashComponent implements OnInit {
  constructor(
    private store: Store<AppState>
  ) { }
  users$!: Observable<User[]>



  async ngOnInit() {
    await this.store.dispatch(AuthAction.getUsers())
      this.users$=this.store.select(getAllUserSelector)
  }

  approve(Id:string){
    this.store.dispatch(AuthAction.approveGov({Id}))
  }

  revoke(Id:string){
    this.store.dispatch(AuthAction.revokeGov({Id}))
  }



}
