import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BooksService } from 'src/app/services/books-services/books.service';
import { Book } from 'src/app/models/book.model';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders-services/orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-books',
  templateUrl: './order-books.component.html',
  styleUrls: ['./order-books.component.css']
})
export class OrderBooksComponent implements OnInit{
  currentOrder:Order = {
    orderId: 0,
    userId: 3,
    bookId: 1,
    status: "string",
    quantity: 0,
    fine: 0,
    total: 0,
    orderDate: "2023-06-14T08:45:16.707Z"
  }
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
  booksList!:Book[];
  constructor(private http:HttpClient,private booksServices:BooksService,private orderServices:OrdersService,private router:Router){}
  ngOnInit(): void {
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    this.booksServices.getAllBooks().subscribe({
      next:(res:any)=> {
        this.booksList=res;
      },
      error:(err)=> {
        console.log(err); 
      },
    })
  }

  order(placeId:number){
    let quantity = +((document.getElementById('q-'+placeId) as HTMLInputElement).value);
    this.currentOrder.quantity = quantity;
    this.currentOrder.bookId = placeId;
    this.currentOrder.userId = this.userData.id;
    this.orderServices.addOrder(this.userData.id,this.currentOrder).subscribe({
      next:(res:any)=> {
        console.log(res);
        alert(res.msg);
        this.router.navigate(['/','my-orders']);
      },
      error:(err)=> {
        console.log(err);
        
      },
    })
  }
}
