import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.css']
})
export class AuthPageComponent {
  constructor(private router:Router){
    if(localStorage.getItem('user-data') != null){
      this.router.navigate(['/','user-dashboard'])
    }
  }
}
