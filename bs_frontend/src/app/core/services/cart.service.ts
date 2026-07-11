import { Injectable, computed, signal } from '@angular/core';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSignal = signal<CartItem[]>([]);
  readonly items = this.itemsSignal.asReadonly();
  readonly count = computed(() => this.itemsSignal().reduce((sum, item) => sum + item.quantity, 0));
  readonly total = computed(() => this.itemsSignal().reduce((sum, item) => sum + item.product.price * item.quantity, 0));

  add(product: Product, size: string): void {
    this.itemsSignal.update((items) => {
      const index = items.findIndex((item) => item.product.id === product.id && item.size === size);

      if (index === -1) {
        return [...items, { product, size, quantity: 1 }];
      }

      return items.map((item, itemIndex) => (itemIndex === index ? { ...item, quantity: item.quantity + 1 } : item));
    });
  }

  changeQuantity(index: number, delta: number): void {
    this.itemsSignal.update((items) =>
      items
        .map((item, itemIndex) => (itemIndex === index ? { ...item, quantity: item.quantity + delta } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  remove(index: number): void {
    this.itemsSignal.update((items) => items.filter((_, itemIndex) => itemIndex !== index));
  }
}
