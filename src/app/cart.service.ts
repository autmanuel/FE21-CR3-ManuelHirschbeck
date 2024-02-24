import { Injectable } from '@angular/core';
import { Product } from './products/product';
import { products } from './products/products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addToCart(productParam: Product) {
    const productIndex = this.cart.findIndex((cartProduct) => {
      // get index in cart of passed productParam
      return cartProduct.name === productParam.name;
    });

    if (productIndex >= 0) {
      // if product is already in cart
      this.cart[productIndex].quantity += 1;
      return; // break function ( stop )
    }

    this.cart.push(productParam);
  }
  removeFromCart(productParam: Product) {
    const productIndex = this.cart.findIndex((cartProduct) => {
      // get index in cart of passed productParam
      return cartProduct.name === productParam.name;
    });

    if (productIndex >= 0) {
      // if product is already in cart
      if (this.cart[productIndex].quantity > 1) {
        this.cart[productIndex].quantity -= 1;
        return;
      }

      delete this.cart[productIndex];
      return; // break function ( stop )
    }
  }

  cartSummary(substractDiscount = false) {
    let summary = 0;

    for (const cartItem of this.cart) {
      summary += cartItem.price * cartItem.quantity;
    }

    if (summary > 40 && substractDiscount) {
      summary = summary - this.getDiscountInEuro(summary);
    }
    return Math.round(summary * 100) / 100;
  }

  getDiscountInEuro(summary: number) {
    const _summary = (summary / 100) * 15;
    return Math.round(_summary * 100) / 100;
  }
  getServiceAmount(summary: number) {
    const service = (summary / 100) * 10;
    return Math.round(service * 100) / 100;
  }

  getCartSummaryPlusTen() {
    const summaryPlusTen = (this.cartSummary() / 100) * 110;
    return Math.round(summaryPlusTen * 100) / 100;
  }
  showCart() {
    return this.cart;
  }
  cartAmount() {
    let amount = 0;
    this.cart.forEach((item) => (amount += item.quantity));
    return amount;
  }
}
