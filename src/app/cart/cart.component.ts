import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  value = 0;

  handleMinus() {
    if (this.value == 0) {
      this.value;
    } else {
      this.value--;
    }
  }
  handlePlus() {
    this.value++;
  }
}
