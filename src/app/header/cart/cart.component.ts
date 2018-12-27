import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent  {
  cartStatus=0;

  constructor() { }



    open_cart()
    {
        this.cartStatus=this.cartStatus+1;


    }
    getSearchkeyWord(event:any)
    {
      // this.youSearching=event.target.value;

      console.log(event.data);
    }

}


