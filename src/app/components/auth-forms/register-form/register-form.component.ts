import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  username!:string;
  email!:string;
  password!:string;
  phone!:string;
  loading:boolean = false;
  msgInfo:any={
    status:'',
    msg: ''
  };
  emptyMessage(){
    setTimeout(() => {
      this.msgInfo.msg='';
      this.msgInfo.status='';
    }, 3000);
  }
  constructor(private router:Router,private authServices:AuthService){}
  onsubmit(){
    this.loading = true;
    // console.log(this.loading);

    this.authServices.register(this.email,this.password,this.username,this.phone).subscribe({
      next:(res:any)=>{
        
        this.loading = false;
        // console.log(res);
        this.msgInfo.msg=res.msg;
        this.msgInfo.status='success';
        this.emptyMessage();
      },
      error:(err:any) => {
        this.loading = false;
        // console.log(err);
        this.msgInfo.msg=err.error;
        this.msgInfo.status='danger';
        this.emptyMessage();
      },
      complete:()=>{
        this.username='';
        this.email='';
        this.password='';
        this.phone='';
      }
    });

  }
}
