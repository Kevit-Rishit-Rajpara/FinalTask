import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserDataService } from '../userData.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  signUpForm!: FormGroup;
  newUser = false;
  Users: any = []

  constructor(
    private router: Router,
    private authServie: AuthService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    // console.log(this.newUser);

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
    });
  }

  onLogin() {
    console.log(this.loginForm.value);
    this.authServie
      .login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(
        (res: any) => {
          console.log(res);
          // this.userDataService.getUserData()
          this.loginForm.reset();
          alert('Login Successfully');
        },
        (err: any) => {
          console.log('Error ' + err);
          alert(err);
        }
      );

    this.router.navigate(['']);
  }
  cleanEmail(data:any) {
  return data.replace(/[^a-zA-Z0-9.@_]/g, "");
  }
  

  onSignUp() {
    this.authServie
      .signUp(this.signUpForm.value.email, this.signUpForm.value.password)
      .subscribe(
        (res: any) => {
          console.log(res);
          // this.Users.push(this.signUpForm.value)
          this.userDataService.setUserData(this.cleanEmail(this.signUpForm.value.email), this.signUpForm.value).subscribe(
            (res) => {
              console.log(res);
            },
            (err) => {
              console.log(err);
            }
          );

          this.signUpForm.reset();
          alert('successfully signed up');
        },
        (err: any) => {
          console.log('Error ' + err);
          alert(err);
        }
      );

    this.router.navigate(['']);
  }
}
