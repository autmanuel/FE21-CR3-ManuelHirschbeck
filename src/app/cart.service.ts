import { Injectable } from '@angular/core';
import { Product } from './products/product';
import {products} from "./products/products";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  constructor() { }

  addToCart(productParam: Product){
    const productIndex = this.cart.findIndex(cartProduct => { // get index in cart of passed productParam
      return cartProduct.name === productParam.name;
    });

    if(productIndex  >= 0) { // if product is already in cart
      this.cart[productIndex].quantity  += 1;
      return; // break function ( stop )
    }

    this.cart.push(productParam);
  }

  cartSummary() {
    let summary = 0;

    for(const cartItem of this.cart) {
      summary += cartItem.price * cartItem.quantity;
    }

    if(summary > 40) {
      summary = (summary / 100) * 85;
    }
    return Math.round(summary * 100) / 100

  }

  getCartSummaryPlusTen() {
    const summaryPlusTen = (this.cartSummary() / 100) * 110;
    return Math.round(summaryPlusTen * 100) / 100;
  }



  showCart() {
    return this.cart;
  }
}
