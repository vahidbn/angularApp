import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Book} from './book.model';
import {Subscription} from 'rxjs';
import {BooksMethods} from './BooksMethods';
import {HttpService} from '../Services/httpService.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit ,OnDestroy {
    paramsSubsctiption:Subscription;
    p: number = 1;
    books: any;
    aboutCategury="";
    a:BooksMethods;
    catSlug="";

  constructor(private router: ActivatedRoute , private  httpservice:HttpService  )
  {}

  ngOnInit() {

     this.paramsSubsctiption= this.router.params.subscribe(
          (params:Params)=>{
             this.catSlug=params.categuryId;
              this.httpservice.fetchBookList(this.catSlug ).subscribe(
                        (response)=>{
                            this.books =response;
                        }
                    )
          }
      )

      window.scrollTo(0, 0)
  }



    ngOnDestroy(){
    this.paramsSubsctiption.unsubscribe();
    console.log('unsubscribe');
        window.scrollTo(0, 0)
    }



}
