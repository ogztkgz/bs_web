import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ProductFilter } from '../../../core/models/product.model';
import { ProductService } from '../../../core/services/product.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-collection-page',
  standalone: true,
  imports: [ProductCard, TranslatePipe],
  templateUrl: './collection-page.html',
  styleUrl: './collection-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollectionPage {
  private readonly route = inject(ActivatedRoute);
  readonly productService = inject(ProductService);
  readonly activeFilter = signal<ProductFilter>('Tümü');
  readonly products = computed(() => this.productService.getByFilter(this.activeFilter()));

  constructor() {
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const requested = params.get('seri') as ProductFilter | null;
      this.activeFilter.set(this.productService.filters.includes(requested as ProductFilter) ? (requested as ProductFilter) : 'Tümü');
    });
  }

  setFilter(filter: ProductFilter): void {
    this.activeFilter.set(filter);
  }

  filterKey(filter: ProductFilter): string {
    return {
      Tümü: 'collection.filters.all',
      Gece: 'collection.filters.night',
      Atlas: 'collection.filters.atlas',
      Rosa: 'collection.filters.rosa',
    }[filter];
  }
}
