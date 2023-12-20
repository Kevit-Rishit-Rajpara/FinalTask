import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productdata.service';
import { Router } from '@angular/router';
import { UserDataService } from '../userData.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  event: any;
  idDetails!: any;
  constructor(
    private productDataService: ProductDataService,
    private userDataService: UserDataService
  ) {}
  discPer(actualPrice: any, discPrice: any) {
    return Math.ceil((100 * (actualPrice - discPrice)) / actualPrice);
  }
  edit: any;
  iteration = 0;
  cartProduct: any;
  buttonClick : any
  homeProducts: Array<any> = [];

  ngOnInit(): void {

    this.productDataService.getProductsData().subscribe(
      (res: Object) => {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (Object.values(res)[i].quantity > 0) {
            this.homeProducts.push(Object.values(res)[i]);
          }
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addToCart(i: any, event: Event) {
    event.stopPropagation();
    this.buttonClick = true
    if (localStorage.getItem('isLogin')) {
      this.idDetails = this.homeProducts[i];
      if (this.userDataService.currentCart.cart.length == 0) {
        this.idDetails['current_quan'] = 1;
        this.userDataService.currentCart['cart'].push(this.idDetails);
      } else {
        let found;
        for (let j = 0; j < this.userDataService.currentCart.cart.length; j++) {
          if (
            this.userDataService.currentCart.cart[j].id ===
            this.homeProducts[i].id
          ) {
            this.userDataService.currentCart['cart'][j].current_quan += 1;
            found = true;
            break;
          } else {
            found = false;
          }
        }
        if (found == false) {
          this.idDetails['current_quan'] = 1;
          this.userDataService.currentCart['cart'].push(this.idDetails);
        }
      }
      this.userDataService
        .updateUser(
          localStorage.getItem('id'),
          this.userDataService.currentCart
        )
        .subscribe(
          (res) => {
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
              title: 'Product added to cart',
            });
          },
          (err) => {
            console.log(err);
          }
        );
    } else {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer);
          toast.addEventListener('mouseleave', Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: 'error',
        title: 'You need to Login First to access the CART',
      });
    }
    this.buttonClick = false
  }
}
