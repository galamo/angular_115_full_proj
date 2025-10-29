import { Component, inject } from '@angular/core';
import { ColorService } from '../../../services/color-service';

@Component({
    selector: 'app-happy-button',
    imports: [],
    templateUrl: './happy-button.html',
    styleUrl: './happy-button.css'
})
export class HappyButton {

    public color = "";

    // We're injecting the ColorService object provided at root level - here: 
    private colorService = inject(ColorService); // Dependency Injection

    public changeColor(): void {
        this.color = this.colorService.getRandomColor();
    }

}
