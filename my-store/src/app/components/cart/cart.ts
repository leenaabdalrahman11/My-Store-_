import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CartService } from '../../services/cart';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart implements OnInit {
  items: CartItem[] = [];
  total = 0;

  fullName = '';
  address = '';
  creditCard = '';

  constructor(
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  get totalItems(): number {
    return this.items.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  }

removeItem(productId: number | undefined): void {
  if (productId === undefined) {
    return;
  }

  this.cartService.removeFromCart(productId);
  this.loadCart();

  alert('Product removed from cart');
}

  increaseQuantity(productId: number | undefined): void {
    if (productId === undefined) {
      return;
    }

    const item = this.items.find(cartItem => cartItem.product.id === productId);

    if (item) {
      item.quantity += 1;
      this.total = this.cartService.getTotal();
    }
  }

  decreaseQuantity(productId: number | undefined): void {
    if (productId === undefined) {
      return;
    }

    const item = this.items.find(cartItem => cartItem.product.id === productId);

    if (item && item.quantity > 1) {
      item.quantity -= 1;
      this.total = this.cartService.getTotal();
    }
  }

  submitOrder(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const orderTotal = this.total;
    const customerName = this.fullName;

    this.cartService.clearCart();
    this.loadCart();

    this.router.navigate(['/confirmation'], {
      queryParams: {
        name: customerName,
        total: orderTotal
      }
    });
  }
}