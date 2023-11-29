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
  idDetails!: number;
  constructor(
    private productDataService: ProductDataService,
    private userDataService: UserDataService,
    private router: Router
  ) {}
  discPer(actualPrice: any, discPrice: any) {
    return Math.ceil((100 * (actualPrice - discPrice)) / actualPrice);
  }
  edit: any;
  iteration = 0;
  cartProduct: any;

  homeProducts: Array<any> = [];

  ngOnInit(): void {
    console.log(this.homeProducts);

    this.userDataService.getUser().subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.productDataService.getProductsData().subscribe(
      (res: Object) => {
        for (let i = 0; i < Object.keys(res).length; i++) {
          if (Object.values(res)[i].quantity > 0) {
            this.homeProducts.push(Object.values(res)[i]);
          }
        }
        // for (this.edit of this.homeProducts) {
        //   this.edit['current_quan'] = 0;
        //   this.homeProducts.splice(this.iteration, 1, this.edit);
        //   this.iteration++;
        //   // console.log(this.edit);
        // }
        console.log(this.homeProducts);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openProduct(i: any) {
    this.router.navigate(['/productDetail']);
    console.log(i);
  }

  addToCart(i: any, event: Event) {
    event.stopPropagation();
    if (localStorage.getItem('isLogin')) {
      this.idDetails = this.homeProducts[i];
      // this.homeProducts[i].current_quan = this.homeProducts[i].current_quan+1
      console.log(this.homeProducts[i].id);
      console.log(this.userDataService.currentCart.cart);
      for (this.cartProduct of this.userDataService.currentCart.cart) {
        if (this.cartProduct.id == this.homeProducts[i].id) {
          +this.cartProduct.current_quan++
        } else {

        }
      }
      this.userDataService.currentCart['cart'].push(this.idDetails);

      // this.userDataService.currentUser.cart = this.userDataService.currentCart;
      this.userDataService
        .updateUser(
          localStorage.getItem('id'),
          this.userDataService.currentCart
        )
        .subscribe(
          (res) => {
            // this.userDataService.currentCart.push(res)
            console.log(res);
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
    // console.log(i);
    // console.log('Product added to Cart');
  }
}
