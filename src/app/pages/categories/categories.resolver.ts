import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';
import { TaskService } from '../../services/task.service';

interface Categories {
  categories: string;
  count: number;
}


@Injectable()
export class CategoriesResolver implements Resolve<any> {

  constructor(
    private categoriesService: CategoriesService,
    private taskService: TaskService
  ) { }

  resolve() {
    return new Promise((resolve, reject) => {

      let breadcrumbs = [
        { url: '/', label: 'Categories' }
      ];
      // get categories from local json file
      this.categoriesService.getCategories()
        .then(
          categories => {
            let count: Categories[] = [];
            this.taskService.getTasksByCategory().then((data) => {
              //console.log(data);
              //console.log(categories);
              categories.forEach(function (category) {
                let total = 0;
                data.forEach(function (item) {
                  if (item.category == category.slug) {
                    total++;
                  }
                });
                // console.log("Total: " + total);
                const dataCount = {
                  categories: category.slug,
                  count: total
                }
                count.push(dataCount);
              });
              // console.log(count);
            });
            return resolve({
              categories: categories,
              breadcrumbs: breadcrumbs,
              count: count
            });
          },
          err => {
            return resolve(null);
          }
        )
    });
  }
}
