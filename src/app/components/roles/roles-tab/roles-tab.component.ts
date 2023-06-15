import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roles-tab',
  templateUrl: './roles-tab.component.html',
  styleUrls: ['./roles-tab.component.css']
})
export class RolesTabComponent {
  constructor(private router:Router,private activatedRoute:ActivatedRoute){}
  addNewRole(id:number){
    this.router.navigate(['/','role-form',id]);
  }
}
