import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrdersService } from 'src/app/services/orders-services/orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

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
  ordersList!:any[];
  constructor(private http:HttpClient,private orderServices:OrdersService,private router:Router){}
  ngOnInit(): void {
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    this.orderServices.getUserOrders(this.userData.id).subscribe({
      next:(res:any)=>{
        this.ordersList = res;
        console.log(this.ordersList);
      },
      error:(err)=>{
        console.log(err);
      },
    });
  }

  deleteOrder(orderId:number){
    if (confirm("are you sure?")) {
      this.orderServices.deleteOrder(this.userData.id,orderId).subscribe({
        next:(res:any)=>{
          this.ordersList = this.ordersList.filter(order => order.orderId != orderId);
          alert(res.msg);
        },
        error:(err)=>{
          console.log(err);
        },
      });
    }
  }

}
