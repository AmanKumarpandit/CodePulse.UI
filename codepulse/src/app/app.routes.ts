import { Routes } from '@angular/router';
import { CategoryList } from './features/category/category-list/category-list';
import { AddCategory } from './features/category/add-category/add-category';
import { Home } from './core/components/home/home/home';

export const routes: Routes = [       
    {
        path: '',
        component: Home // Default route, can be replaced with a home component
    },
    {
        path: 'admin/categories',
        component : CategoryList
    }, 
    {
        path: 'admin/blogpost',
        component : CategoryList // Placeholder, replace with actual component for blog posts
    },
    {
        path: 'admin/categories/add',
        component: AddCategory // Default route, can be replaced with a home component
    }
];
