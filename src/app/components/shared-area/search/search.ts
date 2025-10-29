import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-search',
    imports: [FormsModule],
    templateUrl: './search.html',
    styleUrl: './search.css'
})
export class Search {

    // Property:
    public tooltip = Math.random() < 0.5 ? "Search in our website" : "Enter text to search";

    public textToSearch = "";

    public search(args: Event): void {
        console.log(args);
        alert("Searching for: " + this.textToSearch);
        this.textToSearch = "";
    }

    @ViewChild("searchBox")
    public searchBoxContainer: ElementRef<HTMLInputElement> = null!;

    public showColor(): void {
        const searchBox = this.searchBoxContainer.nativeElement; // similar to: const searchBox = document.getElementById("someId");
        alert(searchBox.value);
    }
}
