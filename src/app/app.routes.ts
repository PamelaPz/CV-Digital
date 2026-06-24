import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'experiencia',
    loadComponent: () => import('./pages/experiencia/experiencia').then(m => m.ExperienciaPage),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
