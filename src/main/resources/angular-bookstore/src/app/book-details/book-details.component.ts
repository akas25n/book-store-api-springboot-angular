import { Component, OnInit } from '@angular/core';
import {Book} from "../common/book";
import {BookService} from "../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book: Book = new Book();

  constructor(private _bookService: BookService,
              private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe(
      () => {
        this.getBookDetails();
      }
    )
  }

  getBookDetails(){
    const id: number = +this._activatedRoute.snapshot.paramMap.get('id');

    this._bookService.getBook(id).subscribe(data => {
      this.book = data;
      });
  }

}
