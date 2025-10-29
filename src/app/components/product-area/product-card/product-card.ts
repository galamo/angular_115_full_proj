import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../../../models/product-model';

@Component({
    selector: 'app-product-card',
    imports: [CommonModule],
    templateUrl: './product-card.html',
    styleUrl: './product-card.css'
})
export class ProductCard {

    @Input() // Can send product from parent component
    public product!: ProductModel;

    private router = inject(Router);

    public showDetails(): void {
        this.router.navigate(["/products/details/" + this.product.id]);
    }
}
