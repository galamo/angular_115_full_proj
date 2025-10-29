import { Component, inject, OnInit } from '@angular/core';
import { ProductModel } from '../../../models/product-model';
import { ProductService } from '../../../services/product-service';
import { CommonModule } from '@angular/common';
import { ProductCard } from '../product-card/product-card';

@Component({
    selector: 'app-product-list',
    imports: [CommonModule, ProductCard],
    templateUrl: './product-list.html',
    styleUrl: './product-list.css'
})
export class ProductList implements OnInit {

    public products: ProductModel[] = [];
    private productService = inject(ProductService); // DI

    public async ngOnInit(): Promise<void> {
        try {
            this.products = await this.productService.getAllProducts();
        }
        catch (err: any) {
            alert(err.message);
        }
    }

}
