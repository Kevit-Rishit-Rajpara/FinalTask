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

  homeProducts: Array<any> = [];

  ngOnInit(): void {
    this.userDataService.getUser().subscribe(
      (res) => {
        // console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.productDataService.getProductsData().subscribe(
      (res: any) => {
        for (let i = 0; i < Object.keys(res).length; i++) {
          this.homeProducts.push(Object.values(res)[i]);
        }
        // console.log(this.homeProducts);
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
       console.log(this.homeProducts[i].id);
       // this.userDataService.currentCart.cart.push(this.id);
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
               title: 'Product added to cart',
             });
           },
           (err) => {
             console.log(err);
           }
         );
    }
    else {
       const Toast = Swal.mixin({
         toast: true,
         position: 'top-end',
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
