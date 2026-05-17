import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, map, tap } from 'rxjs';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:3000/products';
  private productsCache: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    if (this.productsCache.length > 0) {
      return of(this.productsCache);
    }

    return this.http.get<Product[]>(this.productsUrl).pipe(
      tap((products: Product[]) => {
        this.productsCache = products || [];
      })
    );
  }

  getProductById(id: number): Observable<Product | undefined> {
    if (this.productsCache.length > 0) {
      const product = this.productsCache.find(item => Number(item.id) === id);
      return of(product);
    }

    return this.getProducts().pipe(
      map((products: Product[]) => {
        return products.find(item => Number(item.id) === id);
      })
    );
  }
}