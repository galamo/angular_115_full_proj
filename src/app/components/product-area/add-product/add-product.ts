import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ProductModel } from '../../../models/product-model';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product-service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-product',
    imports: [FormsModule],
    templateUrl: './add-product.html',
    styleUrl: './add-product.css'
})
export class AddProduct {

    public product = new ProductModel();
    private productService = inject(ProductService);
    private router = inject(Router);

    @ViewChild("imageBox")
    public imageBoxContainer!: ElementRef<HTMLInputElement>;

    public async send(): Promise<void> {
        try {
            this.product.image = this.imageBoxContainer.nativeElement.files![0];
            await this.productService.addProduct(this.product);
            alert("Product has been added.");
            this.router.navigate(["/products"]);
        }
        catch(err: any) {
            alert(err.message);
        }
    }
}
