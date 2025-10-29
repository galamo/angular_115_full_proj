import { Routes } from '@angular/router';
import { Home } from './components/pages-area/home/home';
import { ProductList } from './components/product-area/product-list/product-list';
import { AddProduct } from './components/product-area/add-product/add-product';
import { About } from './components/pages-area/about/about';
import { Page404 } from './components/pages-area/page404/page404';
import { ProductDetails } from './components/product-area/product-details/product-details';
import { EditProduct } from './components/product-area/edit-product/edit-product';

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" }, // pathMatch: "full" --> use exact empty string match.
    { path: "home", component: Home },
    { path: "products", component: ProductList },
    { path: "products/details/:id", component: ProductDetails },
    { path: "products/edit/:id", component: EditProduct },
    { path: "add-product", component: AddProduct },
    { path: "about", component: About },
    { path: "**", component: Page404 }
];

