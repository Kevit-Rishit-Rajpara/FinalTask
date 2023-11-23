import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserDataService } from '../userData.service';
import { NavComponent } from '../nav/nav.component';
import { MatDialogRef } from '@angular/material/dialog';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  newUser = false;
  Users: any = [];

  constructor(
    private router: Router,
    private authServie: AuthService,
    private userDataService: UserDataService,
    public dialogRef: MatDialogRef<NavComponent>
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
    });

    this.signUpForm = new FormGroup({
      isSeller: new FormControl('false'),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^((\\+91-?)|0)?[6-9]{1}?[0-9]{9}$'),
      ]),
      city: new FormControl(null, Validators.required),
      uid: new FormControl(null),
      myProducts: new FormArray([]),
      cart: new FormArray([]),
    });
  }

  getProductArray() {
    return this.signUpForm.get('products') as FormArray;
  }

  onLogin() {
    // console.log(this.loginForm.value);
    this.authServie
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          localStorage.setItem('isLogin', 'true');
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
            title: 'Login successfully',
          });
          // localStorage.setItem('uid', res.localId);
          this.userDataService
            .getUserByEmail(this.loginForm.value.email)
            .subscribe(
              (res) => {
                // console.log(res);

                this.userDataService.currentUser = res;
                console.log(this.userDataService.currentUser);
                // console.log(this.userDataService.currentUser[0]);
                localStorage.setItem(
                  'id',
                  this.userDataService.currentUser[0].id
                );
                localStorage.setItem(
                  'isSeller',
                  this.userDataService.currentUser[0].isSeller
                );
                this.userDataService.currentCart.cart =
                  this.userDataService.currentUser[0].cart;
                console.log(this.userDataService.currentCart);
                this.userDataService.currentMyProducts.myProducts =
                  this.userDataService.currentUser[0].myProducts;
                console.log(this.userDataService.currentMyProducts);
              },
              (err) => {
                console.log(err);
              }
            );
          this.loginForm.reset();
          this.dialogRef.close();
          // alert('Login Successfully');
        },
        (err: any) => {
          console.log('Error ' + err);
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
            icon: 'error',
            title: err,
          });
          // alert(err);
        }
      );
  }

  onSignUp() {
    this.authServie
      .signUp(this.signUpForm.value.email, this.signUpForm.value.password)
      .subscribe(
        (res: any) => {
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
            title: 'Signed in successfully',
          });
          this.signUpForm.value.uid = res.localId;
          // console.log(this.signUpForm.value + "Special");
          this.userDataService.setUserData(this.signUpForm.value).subscribe(
            (res: any) => {
              console.log(res);
            },
            (err: any) => {
              console.log(err);
            }
          );
        },
        (err: any) => {
          console.log('Error ' + err);
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
            icon: 'error',
            title: err,
          });
          // alert(err);
        }
      );
    this.router.navigate(['']);
  }

  addProduct(ele: any) {
    (<FormArray>this.signUpForm.get('products')).push(ele);
    console.log(this.signUpForm.value);
  }
}
