import { forkJoin as observableForkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from "@angular/router";
import { TaskService } from '../../services/task.service';
import { CategoriesService } from '../../services/categories.service';

@Injectable()
export class CategoryTasksResolver implements Resolve<any> {

  constructor(
    private taskService: TaskService,
    private categoriesService: CategoriesService,
    private router:Router
   ) { }

  resolve(route: ActivatedRouteSnapshot) {

    return new Promise((resolve, reject) => {
      //get current category slug form url
      let category_slug = route.paramMap.get('categorySlug');
      console.log(category_slug);
      observableForkJoin(
        this.categoriesService.getCategoryBySlug(category_slug),
        this.taskService.getTasksByCategory(category_slug)
      ).subscribe(
        data => {

          if(data[0] == undefined){
            this.router.navigate(['']);
            return resolve(null);
          }
          let breadcrumbs = [
            { url: '/', label: 'Categories' },
            { url: 'tasks/' + category_slug, label: data[0].title }
          ];
          return resolve({
            tasks: data[1],
            category_title: data[0].title,
            category_slug: category_slug,
            breadcrumbs: breadcrumbs
          });
        },
        err => {
          return resolve(null);
        });
    })
  }
}
