import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { ProductGradient } from '../../../core/models/product.model';

@Component({
  selector: 'app-product-visual',
  standalone: true,
  templateUrl: './product-visual.html',
  styleUrl: './product-visual.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductVisual {
  readonly gradient = input.required<ProductGradient>();
  readonly monogram = input(false);

  readonly background = computed(() => {
    const gradient = this.gradient();

    return [
      `radial-gradient(75% 60% at 30% 15%, ${gradient.highlight}, transparent 60%)`,
      `linear-gradient(${gradient.direction}deg, ${gradient.base} 0%, #4E1024 100%)`,
    ].join(', ');
  });
}
