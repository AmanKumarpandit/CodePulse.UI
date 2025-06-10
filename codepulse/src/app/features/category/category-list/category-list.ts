import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Category } from '../services/category';
import { CategoryRequest } from '../Models/category.model';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.html',
  imports: [RouterModule,CommonModule],
  styleUrl: './category-list.css',
})
export class CategoryList implements OnInit {

  categories$?: Observable<CategoryRequest[]>;
categories: any;

  constructor(private categoryList: Category) {}

  ngOnInit(): void {
    this.categories$ = this.categoryList.getAllCategory();
  }
}
