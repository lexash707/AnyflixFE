import { Routes } from '@angular/router';
import { MovieGridComponent } from './movie-grid/movie-grid/movie-grid.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { AddSeriesFormComponent } from './add-series/add-series-form/add-series-form.component';

export const routes: Routes = [
    {
      path: '',
      component: MovieGridComponent,
      children: [
      ]
    },
    {
        path: 'login',
        component: LoginFormComponent,
        children: [
        ]
    },
    {
        path: 'add-series',
        component: AddSeriesFormComponent,
        children: [
        ]
      }
  ];
