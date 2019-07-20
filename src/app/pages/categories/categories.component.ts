import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from "./category.model";
import {CategoriesService}  from '../../services/categories.service';
@Component({
  selector: 'categories',
  styleUrls: ['./categories.scss'],
  templateUrl: './categories.component.html'
})

export class CategoriesComponent implements OnInit{

  categories: CategoryModel[];
  count;
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      console.log(routeData['data']);
      let data = routeData['data'];
      if (data) {
        this.categories = data.categories;
        this.count = data.count;
      }
    })
  }

}
