import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Book} from './book.model';
import {Subscription} from 'rxjs';
import {BooksMethods} from './BooksMethods';
import {HttpService} from '../Services/httpService.service';
import {PublicService} from '../Services/publicService.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent implements OnInit ,OnDestroy {
   waitSpinner:boolean=true;
    paramsSubsctiption:Subscription;
    p: number = 1;
    books: any;
    aboutCategury="";
    a:BooksMethods;
    catSlug="";
    baseUrl:string;

  constructor(private router: ActivatedRoute , private  httpservice:HttpService  , private publicService:PublicService)
  {}

  ngOnInit() {
     this.baseUrl=this.publicService.getBaseUrl();
     this.paramsSubsctiption= this.router.params.subscribe(
          (params:Params)=>{
             this.catSlug=params.categuryId;
              this.httpservice.fetchBookList(this.catSlug ).subscribe(
                        (response)=>{
                            this.books =response;
                            this.waitSpinner=false;
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
