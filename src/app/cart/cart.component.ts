import { Component, DoCheck, OnInit } from '@angular/core';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, DoCheck {
  myCart: Array<any> = [];
  constructor(private userDataService: UserDataService) {}
  a: any;
  ngOnInit(): void {
    this.userDataService.getUserById(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.myCart = res.cart;
        for (this.a of this.myCart) {
          this.a['current_quan'] = 1;
          console.log(this.a);
        }
        console.log(this.myCart);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngDoCheck(): void {
    // console.log(this.userDataService.currentCart.cart);
  }

  subtotalPerProduct(price: any, value: any) {
    return +price * +value;
  }

  // onCartClick(i:any) {
  //   console.log(i);
  // }

  value = 1

  handleMinus() {
    if (this.a.current_quan == 1) {
      return this.a.current_quan;} else {
      this.a.current_quan--;
    }
  }
  handlePlus() {
    // this.value++;
    if (this.a.current_quan < this.a.quantity) {
      this.a.current_quan++;
    }
  }
}
