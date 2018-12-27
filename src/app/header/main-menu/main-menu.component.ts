import { Component, OnInit } from '@angular/core';
import {Menu} from './menu.model';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
    myItemmenu: Menu[] = [
    new Menu(1, 'All books', 'fa fa-check' ),
    new Menu(2  , 'books 0-4', 'fa fa-book' ),
    new Menu(3  , 'books 4-8', 'fa fa-book' ),
    new Menu(4  , 'other', 'fa fa-book' ),
     ]
  constructor() { }

  ngOnInit() {
  }

}
