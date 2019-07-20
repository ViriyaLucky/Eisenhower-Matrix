import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesResolver } from './pages/categories/categories.resolver';

import { CategoryTasksComponent } from './pages/category-task/category-task.component';
import { CategoryTasksResolver } from './pages/category-task/category-task.resolver';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    resolve: {
      data: CategoriesResolver
    }
  },
  {
    path: 'category/:categorySlug',
    component: CategoryTasksComponent,
    resolve: {
      data: CategoryTasksResolver
    }
  },
  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
