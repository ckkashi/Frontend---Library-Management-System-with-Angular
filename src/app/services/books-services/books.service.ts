import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Book } from 'src/app/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  baseurl:string = 'https://localhost:7191/api/Books/';
  constructor(private http:HttpClient) { }
  getAllBooks(){
    return this.http.get(this.baseurl+'getAllBooks');
  }
  getBooksWithId(id:number){
    return this.http.get(this.baseurl+'getBookWithId/'+id);
  }
  addBook(id:number,book:Book){
    return this.http.post(this.baseurl+'addBook/'+id,book);
  }
  updateBook(id:number,book:Book){
    return this.http.put(this.baseurl+'updateBook/'+id,book);
  }
  // deleteBook(id:number){
  //   return this.http.put(this.baseurl+'updateBook/'+id+'/'+book.id,book);
  // }
}
