import { Injectable } from '@angular/core';
import { tr } from '../i18n/tr';

type Dictionary = typeof tr;

@Injectable({ providedIn: 'root' })
export class TranslationService {
  private readonly dictionary: Dictionary = tr;

  translate(key: string, params: Record<string, string | number> = {}): string {
    const value = key.split('.').reduce<unknown>((current, part) => {
      if (current && typeof current === 'object' && part in current) {
        return (current as Record<string, unknown>)[part];
      }

      return undefined;
    }, this.dictionary);

    const template = typeof value === 'string' ? value : key;

    return Object.entries(params).reduce(
      (text, [paramKey, paramValue]) => text.replaceAll(`{${paramKey}}`, String(paramValue)),
      template,
    );
  }
}
