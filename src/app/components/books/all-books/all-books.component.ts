import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books-services/books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  allBooks!:Book[];
  constructor(private booksServices:BooksService,private router:Router){}
  ngOnInit(): void { 
    this.booksServices.getAllBooks().subscribe({
      next:(res:any)=>{
        this.allBooks=res;
        // console.log(this.books);
      },
      error:(err)=>{
        console.log(err);
        
      },
    })
  }
  onUpdate(id:number){
    this.router.navigate(['book-form',id]);
  }
}
