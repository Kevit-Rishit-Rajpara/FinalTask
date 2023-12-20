import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDataService } from '../productdata.service';
import { UserDataService } from '../userData.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css'],
})
export class SellerComponent implements OnInit {
  addProduct!: FormGroup;

  constructor(
    private productDataService: ProductDataService,
    private userDataService: UserDataService
  ) {}
  ngOnInit(): void {
    this.addProduct = new FormGroup({
      name: new FormControl(null, Validators.required),
      category: new FormControl(null, Validators.required),
      description: new FormControl(null, Validators.required),
      imgUrl: new FormControl(null, Validators.required),
      actualPrice: new FormControl(null, Validators.required),
      discPrice: new FormControl(null, [Validators.required]),
      quantity: new FormControl(null, [Validators.required, Validators.min(0)]),
      current_Quantity: new FormControl(null),
      perticularSubTotal: new FormControl(null),
    });
    this.fetchMyProducts();
  }

  myProducts: Array<any> = [];
  userDetails = {};

  fetchMyProducts() {
    this.userDataService.getUserById(localStorage.getItem('id')).subscribe(
      (res: any) => {
        this.myProducts = res.myProducts;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onAddProduct() {
    this.productDataService.setProductData(this.addProduct.value).subscribe(
      (res: any) => {
        this.addProduct.reset();
        this.userDataService.currentMyProducts.myProducts.push(res);
        this.userDataService
          .updateUser(
            localStorage.getItem('id'),
            this.userDataService.currentMyProducts
          )
          .subscribe(
            (res) => {
              this.fetchMyProducts();
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
                title: 'Product added successfully',
              });
            },
            (err) => {
              console.log(err);
            }
          );
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
