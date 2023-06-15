import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-tab',
  templateUrl: './books-tab.component.html',
  styleUrls: ['./books-tab.component.css']
})
export class BooksTabComponent {
 constructor(private router:Router){}

 addNewBook(id:number){
  this.router.navigate(['book-form',id]);
 }

}
