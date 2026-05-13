import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'topic/csharp', pathMatch: 'full' },
  {
    path: 'topic/:key',
    loadComponent: () => import('./pages/topic/topic.component').then(m => m.TopicComponent)
  },
  {
    path: 'search',
    loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent)
  },
  { path: '**', redirectTo: 'topic/csharp' }
];
