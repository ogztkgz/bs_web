import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FormatService {
  private readonly currency = new Intl.NumberFormat('tr-TR', {
    style: 'currency',
    currency: 'TRY',
    maximumFractionDigits: 0,
  });

  money(value: number): string {
    return this.currency.format(value).replace('₺', '₺');
  }
}
