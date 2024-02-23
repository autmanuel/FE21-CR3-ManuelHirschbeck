import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cart: Product[] = [];

  constructor(private CS: CartService){}

  ngOnInit(): void {
    this.cart = this.CS.showCart();
  }

  cartSummary() {
    return this.CS.cartSummary()
  }
  cartSummaryPlusTen() {
    return this.CS.getCartSummaryPlusTen()
  }

}
