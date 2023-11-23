import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, child, get } from 'firebase/database';
import { User } from './auth/user.model';
import { HtmlParser } from '@angular/compiler';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}
  // key = 'AIzaSyD5F-j9Ss8Ijo0GupVkQ0Ocu6NyZQ50JpI';

  // firebaseConfig = {
  //   databaseURL:
  //     'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/',
  // };
  // app = initializeApp(this.firebaseConfig);
  // database = getDatabase(this.app);
  userDatabaseUrl = 'http://localhost:3000/Users/';

  // setUserData(uid: any, data: any) {
  // const db = getDatabase();
  // set(ref(db, 'Users/' + uid), data);
  // }

  getUserData(uid: any) {
    // dbRef = ref(getDatabase());
    // get(
    //   child(
    //     ref(getDatabase()),
    //     `Users/${uid}`
    //   )
    // )
    //   .then((snapshot) => {
    //     if (snapshot.exists()) {
    //       localStorage.setItem('fName', snapshot.val().firstName);
    //       localStorage.setItem('lName', snapshot.val().lastName);
    //       localStorage.setItem('email', snapshot.val().email);
    //       localStorage.setItem('isSeller', snapshot.val().isSeller);
    //     } else {
    //       console.log('No data available');
    //     }
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  }

  // getUserData(uid: any) {
  //   return this.http.get(
  //     this.firebaseConfig.databaseURL + '/Users.json/' + uid
  //   );
  // }.

  currentUser: any;

  currentCart: { cart: number[] } = {
    cart: [],
  };
  currentMyProducts: { myProducts: any[] } = {
    myProducts: [],
  };

  getmyUser(email: any) {
    return this.http.get(this.userDatabaseUrl + '?email=' + email);
  }

  setUserData(data: any) {
    return this.http.post(this.userDatabaseUrl, data);
  }

  getUser() {
    return this.http.get(this.userDatabaseUrl);
  }

  pushProductId(id: any, data: any) {
    return this.http.patch(this.userDatabaseUrl + id, data);
  }
}
