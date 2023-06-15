import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Order } from 'src/app/models/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  baseurl:string = 'https://localhost:7191/api/Orders/';
  constructor(private http:HttpClient) { }

  addOrder(id:number,order:Order){
    return this.http.post(this.baseurl+'addOrder/'+id,order);
  }
  getUserOrders(id:number){
    return this.http.get(this.baseurl+'getUserOrder/'+id);
  }
  deleteOrder(id:number,orderId:number){
    return this.http.delete(this.baseurl+'deleteOrder/'+id+'/'+orderId);
  }
  assignOrder(id:number,orderId:number){
    return this.http.get(this.baseurl+'assignOrder/'+id+'/'+orderId);
  }
  returnOrder(id:number,orderId:number){
    return this.http.get(this.baseurl+'returnOrder/'+id+'/'+orderId);
  }
  getPendingOrders(id:number){
    return this.http.get(this.baseurl+'getPendingOrders/'+id);
  }
  getAssignedOrders(id:number){
    return this.http.get(this.baseurl+'getAssignedOrders/'+id);
  }
  getReturnedOrders(id:number){
    return this.http.get(this.baseurl+'getReturnedOrders/'+id);
  }

}
