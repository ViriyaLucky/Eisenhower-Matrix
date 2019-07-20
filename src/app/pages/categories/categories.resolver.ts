import { Injectable } from '@angular/core';
import { Resolve } from "@angular/router";
import { CategoriesService } from "../../services/categories.service";
import { TaskService} from "../../services/task.service";
import { count } from 'rxjs/operators';

@Injectable()
export class CategoriesResolver implements Resolve<any> {

  constructor(
    private categoriesService: CategoriesService,
    private taskService : TaskService
  ) { }

  resolve() {
    return new Promise((resolve, reject) => {

      let breadcrumbs = [
        { url: '/', label: 'Categories' }
      ];

      //get categories from local json file
      this.categoriesService.getCategories()
      .then(
        categories => {
          let count = [];
          for(let slug in categories){
            this.taskService.getTasksByCategory('').then( (data) => {
              let a =  data.filter( (data) => {
                return data.category == categories[slug].slug;
              });
              count.push({'categories': categories[slug].slug, 'count': a.length});
            });
          }
          return resolve({
            categories: categories,
            breadcrumbs: breadcrumbs,
            count:count
          });
        },
        err => {
          return resolve(null);
        }
      )
    });
  }
}
