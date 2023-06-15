import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Role } from 'src/app/models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  baseurl:string = 'https://localhost:7191/api/Roles/';

  constructor( private http:HttpClient) { }

  getUserRoles(id:number){
    return this.http.get(this.baseurl+'getUserRoles/'+id);
  }

  getRoles(){
    return this.http.get(this.baseurl+'getRoles');
  }

  addNewRole(id:number,role:Role){
    return this.http.post(this.baseurl+'addNewRole/'+id,role);
  }

  getRoleWithId(id:number){
    return this.http.get(this.baseurl+'getRoleWithId/'+id);
  }

  updateRole(id:number,role:Role){
    return this.http.put(this.baseurl+'updateRole/'+id,role);
  }

}
