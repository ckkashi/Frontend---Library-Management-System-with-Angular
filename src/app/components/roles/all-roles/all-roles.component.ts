import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles-services/roles.service';

@Component({
  selector: 'app-all-roles',
  templateUrl: './all-roles.component.html',
  styleUrls: ['./all-roles.component.css']
})
export class AllRolesComponent implements OnInit{
  roles:Role = {
    addBooks: false,
    blockUser: false,
    disableUser: false,
    id: 0,
    orderBooks: false,
    removeBooks: false,
    rolename : "",
    updateBooks: false,
    viewAllOrders: false,
    viewAllUsers: false,
    manageRoles:false
  };
  allRoles!:Role[];
  constructor(private rolesServices:RolesService,private router:Router){}

  ngOnInit(): void {
    this.rolesServices.getRoles().subscribe({
      next:(res:any)=> {
        this.allRoles = res;
        // console.log(this.allRoles);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  updateRole(id:number){
    this.router.navigate(['/','role-form',id]);
  }
}
