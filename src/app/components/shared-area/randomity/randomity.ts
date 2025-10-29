import { Component, inject } from '@angular/core';
import { filter, firstValueFrom, lastValueFrom, map, take, takeUntil } from 'rxjs';
import { RandomService } from '../../../services/random-service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-randomity',
    imports: [CommonModule],
    templateUrl: './randomity.html',
    styleUrl: './randomity.css'
})
export class Randomity {

    private randomService = inject(RandomService); //DI
    // constructor(public randomService2:RandomService){}
    public num?: number;
    public num2?: number;
    public arr: number[] = [];
    public isLoading = false;

    public async generateSingleRandomNumber() {
        try {
            this.isLoading = true;
            this.num = await this.randomService.getDelayedRandomNumber();
        }
        catch (err: any) {
            alert(err.message);
        } finally {
            this.isLoading = false;
        }
    }

    public generateMultipleRandomNumbers() {
        const observable = this.randomService.getDelayedRandomNumbers(10);


        // Get mapped numbers:
        observable.pipe(filter((n: number) => n % 2 === 0)).subscribe({
            next: (num: number) => this.arr.push(num),
            error: (err: unknown) => alert((err as Error).message),
            complete: () => alert("Done.")
        });
    }

    public async generateSingleRandomNumber2() {
        const observable = this.randomService.getDelayedRandomNumbers(10);
        this.num2 = await firstValueFrom(observable);
        // this.num2 = await lastValueFrom(observable);

    }

}
