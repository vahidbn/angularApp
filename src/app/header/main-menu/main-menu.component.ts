import { Component, OnInit } from '@angular/core';
import {Menu} from './menu.model';
import {HttpService} from '../../Services/httpService.service';
import {ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})

export class MainMenuComponent implements OnInit {
    myItemmenu: Menu[] = [
    new Menu(1000, 'All books', 'fa fa-check' ,'ss' ,'AllBooks'),
    new Menu(1001  , 'books 0-4', 'fa fa-book','ss' ,'Books-0-4'),
    new Menu(1002  , 'books 4-8', 'fa fa-book' ,'ss','Books-4-8'),
    new Menu(1003  , 'books 8-10', 'fa fa-book' ,'ss','Books-8-10'),
     ]


  constructor(private router: ActivatedRoute ,private httpService:HttpService)
  {

  }

  ngOnInit() {


     //  this.httpService.fetchCategury().subscribe(
     //      (response)=>{
     //          console.log(response);
     //          this.myItemmenu=response;
     //      }
     // )


  }


}
