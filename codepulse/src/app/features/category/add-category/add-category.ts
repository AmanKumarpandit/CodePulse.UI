import { Component, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddCategoryRequest } from '../Models/add-category-request.model';
import { Category } from '../services/category';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  imports: [FormsModule],
  templateUrl: './add-category.html',
  styleUrls: ['./add-category.css'],
  providers: [Category]
})
export class AddCategory implements OnDestroy{


  private addCategorySubscription?: Subscription;
  model : AddCategoryRequest;
    
    constructor(private addCategoryService: Category,
      private router : Router
    ) {
      this.model = {   
          name: '',
          urlHandle: ''
        };
      }
  

  onFormSubmit() {

    this.addCategorySubscription = this.addCategoryService.addCategory(this.model).subscribe({

      next : (response) => {
        this.router.navigateByUrl('/admin/categories');
        
      }
    });
  }

  ngOnDestroy(): void {
    this.addCategorySubscription?.unsubscribe();
  }
}
