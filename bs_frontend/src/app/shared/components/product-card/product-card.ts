import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../../../core/models/product.model';
import { FormatService } from '../../../core/services/format.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ProductVisual } from '../product-visual/product-visual';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductVisual, RouterLink, TranslatePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly format = inject(FormatService);
}
