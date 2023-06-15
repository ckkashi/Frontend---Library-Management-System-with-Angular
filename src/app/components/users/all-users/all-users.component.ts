import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { RolesService } from 'src/app/services/roles-services/roles.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {
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
  searchText!:string;
  newUsers!:any[];
  allRoles!:any[];
  usersBackup!:any[];
  constructor(private authServices:AuthService,private rolesServices:RolesService,private router:Router){
  }
  ngOnInit(): void {
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    if(this.userData){
      this.authServices.getAllUsers(this.userData.id).subscribe({
        next:(res:any)=>{
          this.newUsers = res;
          this.usersBackup = this.newUsers;
          // console.log(this.newUsers);
          this.rolesServices.getRoles().subscribe({
            next:(res:any)=>{
              this.allRoles = res;
              // console.log(this.allRoles);
              
            }
          })
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
  search(){
    if(this.searchText.length>0){
      this.newUsers = this.usersBackup;
      this.newUsers = this.newUsers.filter((ur)=>{
        return ur.email.includes(this.searchText);
      })
      
    }else{
      this.newUsers = this.usersBackup;
    }
    
  }
}
