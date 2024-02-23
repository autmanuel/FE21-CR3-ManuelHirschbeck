import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products/products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  product: Product = {} as Product
  selectedProductId: number = 0;

  constructor(private route: ActivatedRoute, private CS: CartService) {}

  addToCart(){
    alert('Success');
    this.CS.addToCart(this.product);
  }

// ngOnInit = lifecycle hook, special event only existing on angular, runs when entering the component, needed for switching between urls every url gets a index when clicking on a value
  ngOnInit(): void {
  //refers to parameter "/:id"  from app-routing.module can be any name we declare in app-routing.module
    this.selectedProductId = this.route.snapshot.params["id"];
    this.product = products[this.selectedProductId];
  }
}
