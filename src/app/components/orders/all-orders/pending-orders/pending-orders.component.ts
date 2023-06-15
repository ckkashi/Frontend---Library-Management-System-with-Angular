import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders-services/orders.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit{

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
  ordersList!:any[];
  constructor(private ordersServices:OrdersService){}

  ngOnInit(): void {
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    this.ordersServices.getPendingOrders(this.userData.id).subscribe({
      next:(res:any)=>{
        // console.log(res);
        this.ordersList = res;
      },
      error:(error)=>{
        console.log(error); 
      }
    });
  }

  assignBtn(orderid:number){
    this.ordersServices.assignOrder(this.userData.id,orderid).subscribe({
      next:(res:any)=>{
        // console.log(res);
        alert(res.msg);
        this.ordersList = this.ordersList.filter(ord => ord.orderId != orderid);
      },
      error:(err)=>{
        console.log(err);
        
      }
    });
  }

}
