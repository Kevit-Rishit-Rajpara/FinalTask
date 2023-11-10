import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserDataService {
  constructor(private http: HttpClient) {}
  key = 'AIzaSyD5F-j9Ss8Ijo0GupVkQ0Ocu6NyZQ50JpI';

  setUserData(email:any,data: any) {
    return this.http.post(
      'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/Users/'+email+'.json',
      data
    );
  }
    getUserData() {
        return this.http.get(
          'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/Users.json'
        );
    }
}
