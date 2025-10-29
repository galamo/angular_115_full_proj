import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root" // Create an object at root level - accessed from within the entire app.
})
export class ColorService {

    public getRandomColor(): string {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }

}
