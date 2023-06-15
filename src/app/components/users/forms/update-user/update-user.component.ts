import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';
import { RolesService } from 'src/app/services/roles-services/roles.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  id!:any;
  userData:any = {
    id: 0,
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
  allRoles!:any[];
  constructor(private router:Router,private activatedRoute: ActivatedRoute,private rolesServices:RolesService,private authServices:AuthService){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    
    this.authServices.getUserWithId(this.id).subscribe({
      next:(res:any)=>{
        this.userData = res;
        this.rolesServices.getRoles().subscribe({
          next:(res:any)=>{
            this.allRoles = res;
            // console.log(this.allRoles);
          }
        });
      },
      error:(err)=>{
        console.log(err);
      },
    })

  }

  onUpdate(){
    this.authServices.updateUser(this.id,this.userData).subscribe({
      next:(res:any)=>{
        alert(res.msg);
        this.router.navigate(['/','users']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  onDelete(){
    if (confirm("are you sure?")) {
      this.authServices.deleteUser(this.id).subscribe({
        next:(res:any)=>{
          alert(res.msg);
          this.router.navigate(['/','users']);
        },
        error:(err)=>{
          console.log(err); 
        }
      });
    } 
  }

}
