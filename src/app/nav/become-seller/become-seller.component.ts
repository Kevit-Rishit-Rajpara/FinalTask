import { Component } from '@angular/core';

@Component({
  selector: 'app-become-seller',
  templateUrl: './become-seller.component.html',
  styleUrls: ['./become-seller.component.css'],
})
export class BecomeSellerComponent {
  enableSellerMode() {
    alert("Now You are Seller")
    localStorage.setItem("isSeller", "true")
  }
}
