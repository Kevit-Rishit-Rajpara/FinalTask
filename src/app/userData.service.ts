import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { initializeApp } from 'firebase/app';
// import { getDatabase, ref, set, child, get } from 'firebase/database';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}
  key = 'AIzaSyD5F-j9Ss8Ijo0GupVkQ0Ocu6NyZQ50JpI';
  databaseURL = 'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/';
  // app = initializeApp(this.firebaseConfig);
  // database = getDatabase(this.app);

  // transformEmailToFirebasePath(email: string): string {
  // // Replace forbidden characters with underscores
  // const path = email.replace(/[.#$\[\]]/g, '_');
  // return path;
  // }

  // setUserData(email: any, data: any) {
  //   const db = getDatabase();
  //   set(ref(db, 'users/' + this.transformEmailToFirebasePath(email)), data);
  // }

  // getUserData(email: any) {
  //   // dbRef = ref(getDatabase());
  //   get(
  //     child(
  //       ref(getDatabase()),
  //       `users/${this.transformEmailToFirebasePath(email)}`
  //     )
  //   )
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         console.log(snapshot.val());
  //       } else {
  //         console.log('No data available');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  setUserData( data: any) {
    return this.http.post(
      this.databaseURL + 'Users.json/',
      data
    );
  }

  getUserData(email: any) {
    return this.http.get(
      this.databaseURL + '/Users.json/' + email
    );
  }
  pushProductId(uid: any, data:any) {
    return this.http.put(
      this.databaseURL + '/Users.json/' + uid + '/products', data
    )
  }
}
