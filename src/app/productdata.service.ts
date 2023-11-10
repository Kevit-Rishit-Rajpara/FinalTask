import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({'providedIn':"root"})
export class ProductDataService{
    constructor(private http: HttpClient){}
    setUserData(data: any) {
     return this.http.post(
       'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/Products.json',
       data
     );
    }
    getUserData() {
     return this.http.get(
       'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/Products.json'
     );
    }

}