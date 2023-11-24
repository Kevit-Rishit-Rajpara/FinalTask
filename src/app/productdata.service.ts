import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ProductDataService {
  constructor(private http: HttpClient) {}

  productDatabaseUrl = 'http://localhost:3000/Products/';

  newQuantity: { quantity: number } = {
    quantity: 0,
  };

  getProductsData() {
    return this.http.get(this.productDatabaseUrl);
  }

  getPerticularProduct(id: any) {
    return this.http.get(this.productDatabaseUrl + id);
  }

  setProductData(data: any) {
    return this.http.post(this.productDatabaseUrl, data);
  }
  updateProduct(id: any, data: any) {
    return this.http.patch(this.productDatabaseUrl + id, data);
  }
}