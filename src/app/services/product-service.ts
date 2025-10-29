import { inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    private http = inject(HttpClient); // DI

    // Get all products:
    public async getAllProducts(): Promise<ProductModel[]> {

        // Get observable which can get products from the server: 
        const observable = this.http.get<ProductModel[]>(environment.productsUrl);

        // Convert the observable into promise getting the products: 
        const products = await firstValueFrom(observable);

        return products;
    }


    // Get one product: 
    public async getOneProduct(id: number): Promise<ProductModel> {
        const observable = this.http.get<ProductModel>(environment.productsUrl + id);
        const product = await firstValueFrom(observable);
        return product;
    }

    // Add product: 
    public async addProduct(product: ProductModel): Promise<void> {
        
        // Convert product to FormData so we could send text and image: 
        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image);

        const observable = this.http.post<ProductModel>(environment.productsUrl, myFormData);
        const dbProduct = await firstValueFrom(observable);
        console.log(dbProduct);
    }

    // Update product: 
    public async updateProduct(product: ProductModel): Promise<void> {
        
        // Convert product to FormData so we could send text and image: 
        const myFormData = new FormData();
        myFormData.append("name", product.name);
        myFormData.append("price", product.price.toString());
        myFormData.append("stock", product.stock.toString());
        myFormData.append("image", product.image);

        const observable = this.http.put<ProductModel>(environment.productsUrl + product.id, myFormData);
        const dbProduct = await firstValueFrom(observable);
        console.log(dbProduct);
    }

    // Delete product: 
    public async deleteProduct(id: number): Promise<void> {
        const observable = this.http.delete(environment.productsUrl + id);
        await firstValueFrom(observable);
    }

}


