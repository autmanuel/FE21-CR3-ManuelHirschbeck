import { Component } from '@angular/core';
import { Product } from './product';
import { products } from './products';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products: Product[] = products;
  constructor(private cartService: CartService) {
  }
  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
