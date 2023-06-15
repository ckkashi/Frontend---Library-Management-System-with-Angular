import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books-services/books.service';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit{
  
  id!:any;
  pageName:string = 'Add';
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
  book:Book = {
    id: 0,
    bookName: "",
    author: "",
    category: "",
    price: 0,
    quantity: 0,
    addDate: new Date(Date.now()).toISOString()
  }
  constructor(private booksServices:BooksService,private router:Router,private activatedRoute:ActivatedRoute){}
  
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const data = localStorage.getItem('user-data');
    this.userData = data!=null?JSON.parse(data):{};
    if(this.id == 0){
      this.pageName = 'Add';
    }else{
      this.pageName = 'Update';
      this.booksServices.getBooksWithId(this.id).subscribe({
        next:(res:any)=>{
          this.book=res;
        },
        error:(err)=> {
          alert(err.error);
        },
      });
    }
    
  }

  submitBtn(){
    if(this.id == 0){
      this.addBook();
    }else{
      this.updateBook();
    }
  }
  addBook(){
    this.booksServices.addBook(this.userData.id,this.book).subscribe({
      next:(res:any)=>{
        alert(res.msg);
        this.router.navigate(['/','books']);
      },
      error:(err)=>{
        console.log(err);
        alert(err.error);
      }
    });
  }
  updateBook(){
    this.booksServices.updateBook(this.userData.id,this.book).subscribe({
      next:(res:any)=> {
        alert(res.msg);
        this.router.navigate(['/','books']);
      },
      error:(err)=> {
        console.log(err);
        
      },
    });
  }
}
