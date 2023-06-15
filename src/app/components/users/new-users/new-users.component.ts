import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { RolesService } from 'src/app/services/roles-services/roles.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css']
})
export class NewUsersComponent implements OnInit{
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
    viewAllUsers: false
  };
  newUsers!:any[];
  allRoles!:any[];
  constructor(private authServices:AuthService,private rolesServices:RolesService,private router:Router){
  }
  ngOnInit(): void {
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    if(this.userData){
      this.authServices.getNewUsers(this.userData.id).subscribe({
        next:(res:any)=>{
          this.newUsers = res;
          // console.log(this.newUsers);
        },
        error:(err)=>{
          console.log(err);
        }
      });
    }
  }

  onUpdate(id:number){
    // console.log(id);
    this.router.navigate(['/','update-user',id])
  }
}
