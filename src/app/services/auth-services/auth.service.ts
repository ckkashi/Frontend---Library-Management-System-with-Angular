import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseurl:string = 'https://localhost:7191/api/User';

  constructor(private http:HttpClient) { }

  login(email:string,password:string){
    return this.http.post(this.baseurl+'/login',{
      "email":email,
      "password":password,
    });
  }

  register(email:string,password:string,username:string,phone:string,){
    return this.http.post(this.baseurl+'/register',{
      "username":username,
      "email":email,
      "password":password,
      "phone":phone
    });
  }

  getNewUsers(id:number){
    return this.http.get(this.baseurl+'/getNewUsers/'+id);
  }
  getAllUsers(id:number){
    return this.http.get(this.baseurl+'/getAllUsers/'+id);
  }
  getUserWithId(id:number){
    return this.http.get(this.baseurl+'/getUserWithId/'+id);
  }
  updateUser(id:number,data:any){
    return this.http.put(this.baseurl+'/updateUser/'+id,data);
  }
  deleteUser(id:number){
    return this.http.delete(this.baseurl+'/deleteUser/'+id);
  }

}
