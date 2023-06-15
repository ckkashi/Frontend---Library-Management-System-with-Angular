import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  email!:string;
  password!:string;
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

  constructor(private authServices:AuthService,private router:Router){
  }

  onsubmit(){
    this.loading = true;
    // console.log(this.loading);

    this.authServices.login(this.email,this.password).subscribe({
      next:(res:any)=>{
        this.loading = false;
        // console.log(res);
        this.msgInfo.msg="User loggedin successfully.";
        localStorage.setItem('user-data',JSON.stringify(res));
        this.msgInfo.status='success';
        this.emptyMessage();
        this.router.navigate(['/','user-dashboard']);
      },
      error:(err:any) => {
        this.loading = false;
        this.msgInfo.msg=err.error;
        this.msgInfo.status='danger';
        this.emptyMessage();
      },
      complete:()=>{
        this.email='';
        this.password='';
      }
    });

  }

}
