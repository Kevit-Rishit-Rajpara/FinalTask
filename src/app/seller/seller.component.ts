import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../productdata.service';
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
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null, Validators.required),
      actualPrice: new FormControl(null, Validators.required),
      discPrice: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
    });
    this.fetchMyProducts()
  }

  myProducts: Array<any> = [];
  userDetails  = {}

  fetchMyProducts() {
    this.myProducts = this.userDataService.currentMyProducts.myProducts
    console.log(this.myProducts);
    
  }


  getProductsData() {
    // this.productDataService.getProductData(this.addProduct)
  }

  onAddProduct() {
    this.productDataService.setProductData(this.addProduct.value).subscribe(
      (res: any) => {
        this.addProduct.reset()
        // console.log(res);
        // this.myProduct.push(res.name)
        // console.log(this.myProduct);
        // this.authComponent.addProduct(res.name)
        this.userDataService.currentMyProducts.myProducts.push(res)
        console.log(this.userDataService.currentMyProducts.myProducts);
        this.userDataService.pushProductId(localStorage.getItem('id'),this.userDataService.currentMyProducts).subscribe(res =>{console.log(res);
        }, err =>{ console.log(err);
        })
        
      },
      (err:any) => {
        console.log(err);
      }
    )
   
  }
}
