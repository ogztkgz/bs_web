import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../../core/services/product.service';
import { TranslationService } from '../../../core/services/translation.service';
import { UiStateService } from '../../../core/services/ui-state.service';
import { ProductCard } from '../../../shared/components/product-card/product-card';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ProductCard, ReactiveFormsModule, RouterLink, TranslatePipe],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  private readonly ui = inject(UiStateService);
  private readonly translation = inject(TranslationService);
  readonly productService = inject(ProductService);
  readonly newsletterEmail = new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] });

  subscribe(): void {
    if (this.newsletterEmail.invalid) {
      this.ui.showToast(this.translation.translate('toast.invalidEmail'));
      return;
    }

    this.newsletterEmail.reset();
    this.ui.showToast(this.translation.translate('toast.newsletterSuccess'));
  }
}
