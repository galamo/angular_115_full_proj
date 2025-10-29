import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../../models/product-model';
import { ProductService } from '../../../services/product-service';

@Component({
    selector: 'app-edit-product',
    imports: [FormsModule],
    templateUrl: './edit-product.html',
    styleUrl: './edit-product.css'
})
export class EditProduct implements OnInit {

    public product!: ProductModel;
    private productService = inject(ProductService);
    private router = inject(Router);
    private activatedRoute = inject(ActivatedRoute);

    public async ngOnInit(): Promise<void> {
        try {
            const id = +this.activatedRoute.snapshot.paramMap.get("id")!;
            this.product = await this.productService.getOneProduct(id);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    @ViewChild("imageBox")
    public imageBoxContainer!: ElementRef<HTMLInputElement>;

    public async send(): Promise<void> {
        try {
            this.product.image = this.imageBoxContainer.nativeElement.files![0];
            await this.productService.updateProduct(this.product);
            alert("Product has been update.");
            this.router.navigate(["/products"]);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

}
