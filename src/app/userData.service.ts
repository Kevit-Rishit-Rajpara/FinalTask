import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { User } from './auth/user.model';
import { HtmlParser } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}
  
  userDatabaseUrl = 'http://localhost:3000/Users/';

  currentUser: any;

  currentCart: { cart: number[] } = {
    cart: [],
  };

  currentMyProducts: { myProducts: any[] } = {
    myProducts: [],
  };

  getUserByEmail(email: any) {
    return this.http.get(this.userDatabaseUrl + '?email=' + email);
  }

  getUserById(id: any) {
    return this.http.get(this.userDatabaseUrl + id)
  }

  setUserData(data: any) {
    return this.http.post(this.userDatabaseUrl, data);
  }

  getUser() {
    return this.http.get(this.userDatabaseUrl);
  }

  updateUser(id: any, data: any) {
    return this.http.patch(this.userDatabaseUrl + id, data);
  }
}
