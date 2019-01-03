import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { CartComponent } from './header/cart/cart.component';
import { FooterComponent } from './footer/footer.component';
// import {Route, RouterModule} from '@angular/router';
import {RouterModule, Routes} from '@angular/router';
import { MainComponent } from './main/main.component';
import { BooksComponent } from './books/books.component';
import { StoryComponent } from './books/story/story.component';
import {NgxPaginationModule} from 'ngx-pagination';



const appRoutes: Routes = [
    {path: '' , component: MainComponent} ,

    {path: 'books' , component: BooksComponent},
    {path: 'books/:categuryId' , component: BooksComponent},
    {path: 'books/story/:storySlug' , component: StoryComponent}

];



@NgModule({
  declarations: [
   AppComponent,
   HeaderComponent,
   MainMenuComponent,
   CartComponent,
   FooterComponent,
   MainComponent,
   BooksComponent,
   StoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
