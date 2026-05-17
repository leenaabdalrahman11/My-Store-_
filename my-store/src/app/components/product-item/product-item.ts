import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css'
})
export class ProductItem {
  @Input() product!: Product;

  @Output() addProduct = new EventEmitter<Product>();

  increaseQuantity(): void {
    this.product.quantity = (this.product.quantity || 1) + 1;
  }

  decreaseQuantity(): void {
    this.product.quantity = Math.max((this.product.quantity || 1) - 1, 1);
  }

  addToCart(): void {
    const productToAdd: Product = {
      ...this.product,
      quantity: this.product.quantity || 1
    };

    this.addProduct.emit(productToAdd);
  }
}