import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) { }
  

  userDatabaseUrl = 'http://localhost:3000/Users/';

  currentUser: any;

  currentCart: { cart: any[] } = {
    cart: [],
  };

  currentMyProducts: { myProducts: any[] } = {
    myProducts: [],
  };
  currentSellerStatus: { isSeller: boolean } = {
    isSeller : true,
  };

  getUserByEmail(email: any) {
    return this.http.get(this.userDatabaseUrl + '?email=' + email);
  }

  getUserById(id: any) {
    return this.http.get(this.userDatabaseUrl + id);
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
