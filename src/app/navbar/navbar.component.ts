import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(
    private route:Router,
    private toastr :ToastrService
  ){}
  userRole = ''

ngOnInit(): void {
    const Role = localStorage.getItem('Role') 
    if (Role){
      this.userRole = Role
    }


}

  
logout(){
  localStorage.clear()
  
  this.route.navigate(['']) 
  this.toastr.info('User Logged Out.')
}
}