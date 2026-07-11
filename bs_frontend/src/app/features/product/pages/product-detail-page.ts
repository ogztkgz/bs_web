import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { CartService } from '../../../core/services/cart.service';
import { FormatService } from '../../../core/services/format.service';
import { ProductService } from '../../../core/services/product.service';
import { TranslationService } from '../../../core/services/translation.service';
import { UiStateService } from '../../../core/services/ui-state.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { ProductVisual } from '../../../shared/components/product-visual/product-visual';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-product-detail-page',
  standalone: true,
  imports: [ProductVisual, ProductCard, RouterLink, TranslatePipe],
  templateUrl: './product-detail-page.html',
  styleUrl: './product-detail-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly cart = inject(CartService);
  private readonly ui = inject(UiStateService);
  private readonly translation = inject(TranslationService);
  readonly productService = inject(ProductService);
  readonly format = inject(FormatService);
  readonly selectedSize = signal('M');

  private readonly productId = toSignal(this.route.paramMap.pipe(map((params) => Number(params.get('id')))), { initialValue: 0 });
  readonly product = computed(() => this.productService.getById(this.productId()));
  readonly related = computed(() => this.productService.getRelated(this.productId()));

  addToCart(): void {
    const product = this.product();

    if (!product) {
      return;
    }

    this.cart.add(product, this.selectedSize());
    this.ui.showToast(
      this.translation.translate('toast.addedToCart', {
        product: this.translation.translate(product.nameKey),
        size: this.selectedSize(),
      }),
    );
    this.ui.toggleCart(true);
  }
}
