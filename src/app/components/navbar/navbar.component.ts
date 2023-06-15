import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { RolesService } from 'src/app/services/roles-services/roles.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentRoute!:string;
  userData:any = {
    id: 3,
    username: "",
    email: "",
    password: "",
    phone: "",
    userRole: "",
    block: false,
    disable: false,
    createdAt: ""
};
  roles:any = {
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
  constructor(private router:Router, private rolesServices:RolesService){
    router.events.subscribe((event:any)=>{
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url.toString();
        const data = localStorage.getItem('user-data');
        this.userData = data!=null?JSON.parse(data):{};
        if (this.currentRoute != '/' && this.userData) {
          this.rolesServices.getUserRoles(this.userData.id).subscribe({
            next:(res:any)=>{
              this.roles = res;
              
            },
            error:(err)=>{
              console.log(err);
            }
        });
        } else {
          
        }
      }
    })
  }

  logoutUser(){
    localStorage.removeItem('user-data');
    this.router.navigate(['/']);
  }

}
