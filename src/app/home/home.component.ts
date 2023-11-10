import { Component } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  
  discPer(actualPrice: any, discPrice: any) {
    return Math.ceil((100 * (actualPrice - discPrice)) / actualPrice);
  }

  products = [
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
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
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'Shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 200,
      discPrice: 200,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'Pant',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 270,
      discPrice: 100,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 200,
      discPrice: 120,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 300,
      discPrice: 100,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 2000,
      discPrice: 400,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'Shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 200,
      discPrice: 110,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'Pant',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 270,
      discPrice: 100,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 200,
      discPrice: 120,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 300,
      discPrice: 100,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 2000,
      discPrice: 400,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'Shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 200,
      discPrice: 110,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'Pant',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/8/i/i/10-rso132a-red-tape-white-original-imag9wgqahxfnzup.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/m/h/10-rso132a-red-tape-white-original-imag9wgqnwdf6hsk.jpeg?q=70',
      ],
      actualPrice: 270,
      discPrice: 100,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 200,
      discPrice: 120,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
    {
      name: 'T-shirt',
      shortDesc: 'Shirt for Mens',
      description:
        'a Men Shirt Has been Red color and it has 3 sizes and 5 colors available',
      category: 'Clothing',
      imageUrl: [
        'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/p/u/q/-original-imagtbtfuxvu9c2y.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/w/w/o/10-rso132a-red-tape-white-original-imag9wgqdeh77rph.jpeg?q=70',
        'https://rukminim2.flixcart.com/image/832/832/kxgfzbk0/shoe/g/f/f/10-rso132a-red-tape-white-original-imag9wgqbhr72qzv.jpeg?q=70',
      ],
      actualPrice: 300,
      discPrice: 100,
      quantity: 20,
      sizes: ['m', 'l', 'xl'],
      colors: ['red', 'brown', 'yellow'],
      rating: [3, 4, 2, 1, 5, 5],
    },
  ];
}
