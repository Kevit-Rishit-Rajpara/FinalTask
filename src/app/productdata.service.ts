import { HttpClient } from "@angular/common/http";
import { HtmlParser } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, ref, set } from "firebase/database";

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  constructor(private http: HttpClient) {}
  // databaseURL = 'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/'

  productDatabaseUrl = 'http://localhost:3000/Products/';

  // firebaseConfig = {
  //   databaseURL:
  //   'https://web-mart-b76d1-default-rtdb.europe-west1.firebasedatabase.app/',
  // };
  //   app = initializeApp(this.firebaseConfig);
  //   database = getDatabase(this.app);

  //   setProductData(id: any,data: any) {
  //    const db = getDatabase();
  //    set(ref(db, 'products/'+ id), data);
  //   }

  //   fetchProducts() {
  //     get(
  //     child(
  //       ref(getDatabase()),
  //       `products/`
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
  //   }

  //   getProductData(id:any) {
  //   get(
  //     child(
  //       ref(getDatabase()),
  //       `products/${id}`
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
  //   }

  getProductsData() {
    return this.http.get(this.productDatabaseUrl);
  }

  getPerticularProduct(id: any) {
    return this.http.get(this.productDatabaseUrl + id)
  }

  setProductData(data: any) {
    return this.http.post(this.productDatabaseUrl, data);
  }
}