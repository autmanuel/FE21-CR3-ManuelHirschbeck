import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  constructor(private CS: CartService) {}

  cartSummary() {
    return this.CS.cartSummary();
  }
  cartSummaryWihDiscountSubstracted() {
    return this.CS.cartSummary(true);
  }
  getCartSummaryDiscountInEuro() {
    return this.CS.getDiscountInEuro(this.CS.cartSummary());
  }
  getServicePrice() {
    return this.CS.getServiceAmount(this.CS.cartSummary());
  }
  cartSummaryPlusTen() {
    return this.CS.getCartSummaryPlusTen();
  }
  getCartAmount() {
    return this.CS.cartAmount();
  }

  increase(item: Product) {
    this.CS.addToCart(item);
  }

  decrease(item: Product) {
    this.CS.removeFromCart(item);
    this.CS.cart = this.CS.cart.filter((item) => {
      return item;
    });
    console.log(this.CS.cart);
  }
  getCart() {
    return this.CS.showCart();
  }
}
