import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.model';
import { ProductDataService } from '../productdata.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  addProduct!: FormGroup;

  constructor(private productDataService: ProductDataService) {}
  ngOnInit(): void {
    this.addProduct = new FormGroup({
      name: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null, Validators.required),
      actualPrice: new FormControl(null, Validators.required),
      discPrice: new FormControl(null, Validators.required),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
    });

    this.getProductsData();
  }

  productList:[] =[]

  getProductsData() {
    this.productDataService.getUserData().subscribe(
      (res) => {
        console.log(res);
        // this.productList.push(res)
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onAddProduct() {
    this.productDataService.setUserData(this.addProduct.value).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
