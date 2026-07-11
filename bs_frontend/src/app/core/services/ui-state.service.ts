import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  readonly isCartOpen = signal(false);
  readonly toastMessage = signal<string | null>(null);
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  toggleCart(open: boolean): void {
    this.isCartOpen.set(open);
  }

  showToast(message: string): void {
    this.toastMessage.set(message);

    if (this.toastTimer) {
      clearTimeout(this.toastTimer);
    }

    this.toastTimer = setTimeout(() => this.toastMessage.set(null), 2600);
  }
}
