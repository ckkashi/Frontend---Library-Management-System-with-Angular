import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/models/role.model';
import { RolesService } from 'src/app/services/roles-services/roles.service';

@Component({
  selector: 'app-roles-form',
  templateUrl: './roles-form.component.html',
  styleUrls: ['./roles-form.component.css']
})
export class RolesFormComponent {
  id!:any;
  pageName:string = 'Add';
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
  constructor(private rolesServices:RolesService,private router:Router,private activatedRoute:ActivatedRoute){}
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    if(this.id == 0){
      this.pageName = 'Add';
    }else{
      this.pageName = 'Update';
      this.rolesServices.getRoleWithId(this.id).subscribe({
        next:(res:any)=>{
          this.roles=res;
        },
        error:(err)=> {
          alert(err.error);
        },
      })
    }
    
  }
  btnClick(){
    
    if(this.id == 0){
      this.addRole();
    }else{
      this.updateRole();
    }
  }
  addRole(){
    this.rolesServices.addNewRole(this.userData.id,this.roles).subscribe({
      next:(res:any)=>{
        alert(res.msg);
        this.router.navigate(['/','roles']);
      },
      error:(err:any)=>{
        alert(err.error);
      },
    });
  }
  updateRole(){
    this.rolesServices.updateRole(this.userData.id,this.roles).subscribe({
      next:(res:any)=>{
        alert(res.msg);
        this.router.navigate(['/','roles']);
      },
      error:(err:any)=>{
        alert(err.error);
      },
    });
  }
}
