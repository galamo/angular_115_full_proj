import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-clicker',
    imports: [],
    templateUrl: './clicker.html',
    styleUrl: './clicker.css'
})
export class Clicker {

    // public counter = 0; // Change Detection (slow)
    public counter = signal(0); // Returns a function (signal = fast)
    
    public init(): void {
        // this.counter = 0;
        this.counter.set(0);
    }

    public increment(): void {
        // this.counter++; // Change Detection (slow)
        // this.counter.set(this.counter() + 1);
        this.counter.update(prev => prev + 1);
    }

    public decrement(): void {
        // this.counter--; // Change Detection (slow)
        // this.counter.set(this.counter() - 1);
        this.counter.update(prev => prev - 1);
    }

}
