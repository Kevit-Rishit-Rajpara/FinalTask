import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../productdata.service';
import { Router } from '@angular/router';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  event: any;
  id!: number;
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
    console.log(i);
    // console.log('Product added to Cart');
    this.id = this.homeProducts[i];
    console.log(this.homeProducts[i].id);
    // this.userDataService.currentCart.cart.push(this.id);
    this.userDataService.currentCart['cart'].push(this.id);
    this.userDataService.currentUser.cart = this.userDataService.currentCart;
    this.userDataService
      .pushProductId(
        localStorage.getItem('id'),
        this.userDataService.currentCart
      )
      .subscribe(
        (res) => {
          // this.userDataService.currentCart.push(res)
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }
}
