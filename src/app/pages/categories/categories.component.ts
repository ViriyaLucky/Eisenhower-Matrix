import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from "./category.model";
import { CategoriesService } from '../../services/categories.service';
@Component({
  selector: 'categories',
  styleUrls: ['./categories.scss'],
  templateUrl: './categories.component.html'
})

export class CategoriesComponent implements OnInit {

  categories: CategoryModel[];
  count;
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(routeData => {
      if (routeData.data) {
        this.categories = routeData.data.categories;
        this.count = routeData.data.count;
      }
    })
  }

  ngOnInit(): void {
  }

}
