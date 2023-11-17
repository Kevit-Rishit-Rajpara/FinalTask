import { Component, OnInit } from '@angular/core';
import { FormArray, FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserDataService } from '../userData.service';
import { NavComponent } from '../nav/nav.component';
import { MatDialogRef } from '@angular/material/dialog';

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
      isSeller: new FormControl(null),
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
      products : new FormArray([])
    });
  }

  getProductArray() {
    return this.signUpForm.get('products') as FormArray
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.authServie
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          localStorage.setItem('isLogin', 'true');
          console.log(res);
          localStorage.setItem('uid', res.localId);
          this.loginForm.reset();
          this.dialogRef.close();
          alert('Login Successfully');
        },
        (err: any) => {
          console.log('Error ' + err);
          alert(err);
        }
      );
  }

  onSignUp() {
    this.authServie
      .signUp(this.signUpForm.value.email, this.signUpForm.value.password)
      .subscribe(
        (res: any) => {
          console.log(res);
          this.signUpForm.value.uid = res.localId
          console.log(this.signUpForm.value + "Special");
          
          this.userDataService
            .setUserData( this.signUpForm.value )
            .subscribe(
              (res:any) => {
                console.log(res)
                this.signUpForm.reset();
                 this.dialogRef.close();
                alert('successfully signed up');
              },
              (err) => {
                console.log(err);
              }
            );
        },
        (err: any) => {
          console.log('Error ' + err);
          alert(err);
        }
      );

    this.router.navigate(['']);
  }
}
