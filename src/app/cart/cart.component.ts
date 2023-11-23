import { Component, DoCheck, OnInit } from '@angular/core';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, DoCheck {
  myCart: any = this.userDataService.currentCart.cart
  constructor(private userDataService: UserDataService) { }


  ngOnInit(): void {
    // console.log('init');
    // console.log(this.myCart);
    
    
    
  }
  ngDoCheck(): void {
    console.log(this.userDataService.currentCart.cart);
    
  }

  subtotalPerProduct (price:any, value:any) {
    return (+price) * (+value) 
  }



  // onCartClick(i:any) {
  //   console.log(i);
  // }

  value = 1;

  handleMinus() {
    if (this.value == 0) {
      this.value;
    } else {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }
}
