import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Product } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private storageKey = 'cartItems';
  private items: CartItem[] = [];
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loadCart();
  }

  private loadCart(): void {
    if (!this.isBrowser) {
      return;
    }

    const savedCart = localStorage.getItem(this.storageKey);

    if (savedCart) {
      this.items = JSON.parse(savedCart);
    }
  }

  private saveCart(): void {
    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(this.items));
  }

  addToCart(product: Product): void {
    const existingItem = this.items.find(
      item => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        product: product,
        quantity: 1
      });
    }

    this.saveCart();
  }

  getItems(): CartItem[] {
    return this.items;
  }

  getTotal(): number {
    return this.items.reduce((total, item) => {
      return total + Number(item.product.price) * item.quantity;
    }, 0);
  }

  removeFromCart(productId: number | undefined): void {
    this.items = this.items.filter(
      item => item.product.id !== productId
    );

    this.saveCart();
  }

  clearCart(): void {
    this.items = [];
    this.saveCart();
  }

  getCartCount(): number {
    return this.items.reduce((count, item) => {
      return count + item.quantity;
    }, 0);
  }
}