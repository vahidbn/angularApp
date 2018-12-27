import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HeaderComponent} from './header/header.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { CartComponent } from './header/cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   MainMenuComponent,
   CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
