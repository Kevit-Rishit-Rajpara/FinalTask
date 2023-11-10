import { Component } from '@angular/core';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent {
  product = {
    name: 'Shoes',
    shortDesc: 'Shoes for Mens',
    description:
      'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
    category: 'Clothing',
    imageUrl: [
      'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
      'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
      'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
    ],
    actualPrice: 2000,
    discPrice: 200,
    quantity: 20,
    sizes: ['s', 'm', 'l', 'xl', 'xxl'],
    colors: ['red', 'blue', 'green', 'yellow'],
    rating: [3, 4, 2, 1, 5, 5],
  };

  // ****************************** For Quantity Selector**********************
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

  onAddtoCart() {
    alert('This product added to cart');
  }
}
