export type ProductCategory = 'Gece' | 'Atlas' | 'Rosa';
export type ProductFilter = 'Tümü' | ProductCategory;

export interface ProductGradient {
  highlight: string;
  base: string;
  direction: number;
}

export interface Product {
  id: number;
  nameKey: string;
  category: ProductCategory;
  price: number;
  tagKey?: string;
  gradient: ProductGradient;
  descriptionKey: string;
}

export interface CollectionSummary {
  category: ProductCategory;
  titleKey: string;
  countKey: string;
  visualClass: string;
}
