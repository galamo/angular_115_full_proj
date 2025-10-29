import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProductModel } from '../../../models/product-model';
import { ProductService } from '../../../services/product-service';

@Component({
    selector: 'app-product-details',
    imports: [RouterLink, CommonModule],
    templateUrl: './product-details.html',
    styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {

    public product!: ProductModel;
    private productService = inject(ProductService);
    private activatedRoute = inject(ActivatedRoute);
    private router = inject(Router);

    public async ngOnInit(): Promise<void> {
        try {
            const id = +this.activatedRoute.snapshot.paramMap.get("id")!;
            this.product = await this.productService.getOneProduct(id);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

    public async deleteMe(): Promise<void> {
        try {
            const sure = confirm("Are you sure?");
            if(!sure) return;
            await this.productService.deleteProduct(this.product.id);
            alert("Product has been deleted");
            this.router.navigate(["/products"]);
        }
        catch (err: any) {
            alert(err.message);
        }
    }

}
