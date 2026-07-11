import { Routes } from '@angular/router';

import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/home/pages/home-page').then((m) => m.HomePage),
      },
      {
        path: 'koleksiyon',
        loadComponent: () => import('./features/collection/pages/collection-page').then((m) => m.CollectionPage),
      },
      {
        path: 'urun/:id',
        loadComponent: () => import('./features/product/pages/product-detail-page').then((m) => m.ProductDetailPage),
      },
      {
        path: 'hikayemiz',
        loadComponent: () => import('./features/about/pages/about-page').then((m) => m.AboutPage),
      },
      {
        path: 'iletisim',
        loadComponent: () => import('./features/contact/pages/contact-page').then((m) => m.ContactPage),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
