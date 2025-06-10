import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { CategoryRequest } from '../Models/category.model';

@Injectable({
  providedIn: 'root',
})
export class Category {

  constructor(private http: HttpClient) {}

  addCategory(model: AddCategoryRequest): Observable<void> {
    return this.http.post<void>(`${environment.apiBaseUrl}/api/categories`, model);
  }

  getAllCategory(): Observable<CategoryRequest[]> {
    return this.http.get<CategoryRequest[]>(`${environment.apiBaseUrl}/api/categories`);
  }
}
