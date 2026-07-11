import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CartService } from '../../../core/services/cart.service';
import { FormatService } from '../../../core/services/format.service';
import { TranslationService } from '../../../core/services/translation.service';
import { UiStateService } from '../../../core/services/ui-state.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ProductVisual } from '../product-visual/product-visual';

@Component({
  selector: 'app-cart-drawer',
  standalone: true,
  imports: [ProductVisual, TranslatePipe],
  templateUrl: './cart-drawer.html',
  styleUrl: './cart-drawer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartDrawer {
  readonly cart = inject(CartService);
  readonly ui = inject(UiStateService);
  readonly format = inject(FormatService);
  private readonly translation = inject(TranslationService);

  checkout(): void {
    const key = this.cart.count() ? 'toast.demoCheckout' : 'toast.emptyCart';
    this.ui.showToast(this.translation.translate(key));
  }
}
