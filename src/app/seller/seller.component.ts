import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../productdata.service';
import { HttpClient } from '@angular/common/http';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  addProduct!: FormGroup;

  constructor(private productDataService: ProductDataService, private userDataService : UserDataService) {}
  ngOnInit(): void {
    this.addProduct = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null, Validators.required),
      actualPrice: new FormControl(null, Validators.required),
      discPrice: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
    this.fetchProducts()
  }

  productList: Array<any> = [];

  fetchProducts() {

    // this.productDataService.fetchProducts();
  }


  getProductsData() {
    // this.productDataService.getProductData(this.addProduct)
  }

  onAddProduct() {
    this.productDataService.setProductData(this.addProduct.value).subscribe(
      (res:any) => {
        console.log(res.name);
        // this.productList.push(res.name)
        // console.log(this.productList);
        // this.userDataService.getUserData(localStorage.getItem('uid')).subscribe(
        //   (res: any) => {
        //     console.log(res);
        //   }, (err: any) => {
        //     console.log(err);
          // }
        // )
        
        this.userDataService.pushProductId(localStorage.getItem('uid'), res.name).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          }
        )
      },
      (err:any) => {
        console.log(err);
      }
    )
   
  }
}
