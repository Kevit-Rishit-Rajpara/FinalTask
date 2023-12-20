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
  edit: any;
  iteration: any;
  subTotal: number = 0;
  gst: number = 0;
  Total: number = 0;
  ngOnInit(): void {
    this.iteration = 0;
    this.userDataService.getUserById(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.myCart = res.cart;
        for (this.edit of this.myCart) {
          this.edit['subtotalPerProduct'] = this.subtotalPerProduct(
            this.iteration,
            this.edit.discPrice,
            this.myCart[this.iteration].current_quan
          );

          this.myCart.splice(this.iteration, 1, this.edit);
          this.iteration++;
        }
      },

      (err) => {
        console.log(err);
      }
    );
  }
  ngDoCheck(): void {
    this.subTotal = 0;
    for (let t = 0; t < this.myCart.length; t++) {
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
    }
  }

  onDelete(index: any) {
    this.userDataService.currentCart.cart.splice(index, 1);
    this.userDataService
      .updateUser(localStorage.getItem('id'), this.userDataService.currentCart)
      .subscribe(
        (res) => {
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
      this.productDataService
        .updateProduct(this.myCart[k].id, this.productDataService.newQuantity)
        .subscribe(
          (res: any) => {
            this.userDataService.currentCart.cart = [];
            this.myCart = [];
            this.userDataService
              .updateUser(
                localStorage.getItem('id'),
                this.userDataService.currentCart
              )
              .subscribe(
                (res) => {
                },
                (err) => {
                  console.log(err);
                }
            );
             const Toast = Swal.mixin({
               toast: true,
               position: 'bottom-end',
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
  }
}
