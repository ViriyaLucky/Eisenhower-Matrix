import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CategoryModel } from '../pages/categories/category.model';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Promise<CategoryModel[]> {
    return this.http.get("./assets/categories.json")
      .toPromise()
      .then(res => res as CategoryModel[])
  }

  getCategoryBySlug(slug: string) {
    return this.getCategories()
      .then(categories => {
        return categories.find((category) => {
          return category.slug == slug;
        });
      })
  }
}
