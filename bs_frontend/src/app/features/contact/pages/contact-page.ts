import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { TranslationService } from '../../../core/services/translation.service';
import { UiStateService } from '../../../core/services/ui-state.service';
import { TranslatePipe } from '../../../shared/pipes/translate.pipe';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ReactiveFormsModule, TranslatePipe],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactPage {
  private readonly fb = inject(FormBuilder);
  private readonly ui = inject(UiStateService);
  private readonly translation = inject(TranslationService);

  readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    message: ['', Validators.required],
  });

  send(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.ui.showToast(this.translation.translate('toast.requiredContact'));
      return;
    }

    this.form.reset();
    this.ui.showToast(this.translation.translate('toast.contactSuccess'));
  }
}
