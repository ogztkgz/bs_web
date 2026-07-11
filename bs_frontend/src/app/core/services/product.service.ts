import { Injectable } from '@angular/core';
import { CollectionSummary, Product, ProductFilter } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly products: Product[] = [
    {
      id: 1,
      nameKey: 'products.noirName',
      category: 'Gece',
      price: 2450,
      tagKey: 'products.bestSeller',
      gradient: { highlight: '#E8B9C1', base: '#7B1E3A', direction: 155 },
      descriptionKey: 'products.noirDesc',
    },
    {
      id: 2,
      nameKey: 'products.robeName',
      category: 'Atlas',
      price: 3890,
      tagKey: 'products.new',
      gradient: { highlight: '#F2D6DA', base: '#5E152C', direction: 200 },
      descriptionKey: 'products.robeDesc',
    },
    {
      id: 3,
      nameKey: 'products.babydollName',
      category: 'Rosa',
      price: 1980,
      gradient: { highlight: '#F2D6DA', base: '#8A2543', direction: 170 },
      descriptionKey: 'products.babydollDesc',
    },
    {
      id: 4,
      nameKey: 'products.bodyName',
      category: 'Gece',
      price: 2190,
      tagKey: 'products.limited',
      gradient: { highlight: '#C98B9B', base: '#330817', direction: 155 },
      descriptionKey: 'products.bodyDesc',
    },
    {
      id: 5,
      nameKey: 'products.shortsName',
      category: 'Atlas',
      price: 2750,
      gradient: { highlight: '#F7E3E6', base: '#7B1E3A', direction: 185 },
      descriptionKey: 'products.shortsDesc',
    },
    {
      id: 6,
      nameKey: 'products.braletName',
      category: 'Rosa',
      price: 1650,
      tagKey: 'products.new',
      gradient: { highlight: '#F2D6DA', base: '#9C2E4C', direction: 150 },
      descriptionKey: 'products.braletDesc',
    },
    {
      id: 7,
      nameKey: 'products.corsetName',
      category: 'Gece',
      price: 3250,
      gradient: { highlight: '#A64860', base: '#330817', direction: 165 },
      descriptionKey: 'products.corsetDesc',
    },
    {
      id: 8,
      nameKey: 'products.kimonoName',
      category: 'Atlas',
      price: 4150,
      tagKey: 'products.premium',
      gradient: { highlight: '#E8B9C1', base: '#6B1A33', direction: 210 },
      descriptionKey: 'products.kimonoDesc',
    },
    {
      id: 9,
      nameKey: 'products.garterName',
      category: 'Rosa',
      price: 2380,
      gradient: { highlight: '#F5DCE0', base: '#7B1E3A', direction: 140 },
      descriptionKey: 'products.garterDesc',
    },
  ];

  readonly filters: ProductFilter[] = ['Tümü', 'Gece', 'Atlas', 'Rosa'];
  readonly sizes = ['XS', 'S', 'M', 'L', 'XL'];

  readonly collections: CollectionSummary[] = [
    { category: 'Gece', titleKey: 'collections.nightTitle', countKey: 'collections.nightCount', visualClass: 'bg-1' },
    { category: 'Atlas', titleKey: 'collections.atlasTitle', countKey: 'collections.atlasCount', visualClass: 'bg-2' },
    { category: 'Rosa', titleKey: 'collections.rosaTitle', countKey: 'collections.rosaCount', visualClass: 'bg-3' },
  ];

  getAll(): Product[] {
    return this.products;
  }

  getFeatured(): Product[] {
    return this.products.slice(0, 3);
  }

  getByFilter(filter: ProductFilter): Product[] {
    return filter === 'Tümü' ? this.products : this.products.filter((product) => product.category === filter);
  }

  getById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  getRelated(id: number): Product[] {
    return this.products.filter((product) => product.id !== id).slice(0, 3);
  }
}
