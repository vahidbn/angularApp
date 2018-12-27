import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Book} from './book.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit ,OnDestroy{
    paramsSubsctiption:Subscription;
    books: Book[] = [
        new Book(1,1,'first Book','first-Book','/assets/books/book1.jpg',25,'one of best selles books'),
        new Book(2,2,'Book Num 2','Book-Num-2','/assets/books/book1.jpg',55,'one of best selles books'),
        new Book(3,2,'Book Num 3','Book-Num-3','/assets/books/book1.jpg',45,'one of best selles books'),
        new Book(4,3,'Book Num 4','Book-Num-4','/assets/books/book1.jpg',65,'one of best selles books'),
    ]
    categeruryID ="*";
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
      this.categeruryID = this.router.snapshot.params['categuryId'];

      this.paramsSubsctiption=   this.router.params.subscribe(
          (params:Params)=>
          {
          this.categeruryID = this.router.snapshot.params['categuryId']
          })
  }

    ngOnDestroy(){
    this.paramsSubsctiption.unsubscribe();
    }



}
