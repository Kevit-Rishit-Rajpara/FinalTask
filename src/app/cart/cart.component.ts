import { Component, DoCheck, OnInit } from '@angular/core';
import { UserDataService } from '../userData.service';
import { ProductDataService } from '../productdata.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, DoCheck {
  myCart: Array<any> = [];
  constructor(
    private userDataService: UserDataService,
    private productDataService: ProductDataService
  ) {}
  a: any;
  i: any;
  subTotal: number = 0;
  gst: number = 0;
  Total: number = 0;
  ngOnInit(): void {
    this.i = 0;
    this.userDataService.getUserById(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.myCart = res.cart;
        for (this.a of this.myCart) {
          this.a['current_quan'] = 1;
          this.a['subtotalPerProduct'] = this.subtotalPerProduct(
            this.i,
            this.a.discPrice,
            this.myCart[this.i].current_quan
          );
          // console.log(this.myCart[this.i].subtotalPerProduct);

          this.myCart.splice(this.i, 1, this.a);
          this.i++;

          // console.log(this.a);
        }
      },

      (err) => {
        console.log(err);
      }
    );
  }
  ngDoCheck(): void {
    // console.log('Do Check');
    // console.log(this.myCart);
    this.subTotal = 0;
    for (let t = 0; t < this.myCart.length; t++) {
      // console.log('Do Check = ' + this.myCart[t].subtotalPerProduct);
      this.subTotal = this.subTotal + this.myCart[t].subtotalPerProduct;
    }
    this.gst = this.subTotal * 0.03;
    this.Total = this.subTotal + 2 * this.gst;
  }

  subtotalPerProduct(index: any, price: any, value: any) {
    return +price * +value;
  }

  handleMinus(index: any) {
    if (this.myCart[index].current_quan == 1) {
      return this.myCart[index].current_quan;
    } else {
      this.myCart[index].current_quan--;
      this.myCart[index].subtotalPerProduct = this.subtotalPerProduct(
        index,
        this.myCart[index].current_quan,
        this.myCart[index].discPrice
      );
    }
  }
  handlePlus(index: any) {
    if (this.myCart[index].current_quan < this.myCart[index].quantity) {
      this.myCart[index].current_quan++;
      this.myCart[index].subtotalPerProduct = this.subtotalPerProduct(
        index,
        this.myCart[index].current_quan,
        this.myCart[index].discPrice
      );
      console.log(this.myCart);
    }
  }

  onDelete(index: any) {
    console.log(index);
    this.userDataService.currentCart.cart.splice(index, 1);
    this.userDataService
      .updateUser(localStorage.getItem('id'), this.userDataService.currentCart)
      .subscribe(
        (res) => {
          // console.log(res);
          this.ngOnInit();
        },
        (err) => {
          console.log(err);
        }
      );
  }

  proccedToBuy() {
    this.userDataService.currentCart.cart = [];
    for (let k = 0; k < this.myCart.length; k++) {
      let newQuantity: any;
      newQuantity = this.myCart[k].quantity - this.myCart[k].current_quan;
      this.productDataService.newQuantity.quantity = newQuantity;
      // console.log(newQuantity);
      // console.log(this.productDataService.newQuantity);
      // console.log(this.myCart[k].id);

      this.productDataService
        .updateProduct(this.myCart[k].id, this.productDataService.newQuantity)
        .subscribe(
          (res: any) => {
            // console.log(res);
            // console.log('Product Buy');
            this.userDataService.currentCart.cart = [];
            this.myCart = [];
            this.userDataService
              .updateUser(
                localStorage.getItem('id'),
                this.userDataService.currentCart
              )
              .subscribe(
                (res) => {
                  // console.log(res);
                  // this.ngOnInit();
                },
                (err) => {
                  console.log(err);
                }
            );
             const Toast = Swal.mixin({
               toast: true,
               position: 'top-end',
               showConfirmButton: false,
               timer: 1500,
               timerProgressBar: true,
               didOpen: (toast) => {
                 toast.addEventListener('mouseenter', Swal.stopTimer);
                 toast.addEventListener('mouseleave', Swal.resumeTimer);
               },
             });
             Toast.fire({
               icon: 'success',
               title: 'Order Placed',
             });
          },
          (err) => {
            console.log(err);
          }
        );
    }
    // this.userDataService.currentCart.cart = [];
    // this.myCart = [];
  }
}
