import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Search } from "../../shared-area/search/search";
import { Clicker } from "../../shared-area/clicker/clicker";
import { HappyButton } from "../../shared-area/happy-button/happy-button";
import { Title } from '@angular/platform-browser';
import { Randomity } from "../../shared-area/randomity/randomity";
import { StudentsListComponent } from '../../shared-area/users/users';
import { Total } from '../../shared-area/total/total';

@Component({
    selector: 'app-home',
    imports: [Search, Clicker, HappyButton, Randomity, StudentsListComponent, Total],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home implements OnInit, OnDestroy {

    private titleService = inject(Title); // DI - Dependency Injection

    // ngOnInit lifecycle hook:
    public ngOnInit(): void {

        this.titleService.setTitle("Northwind Home");

        console.log("ngOnInit - Home component created");
    }

    // ngOnDestroy lifecycle hook:
    public ngOnDestroy(): void {
        console.log("ngOnDestroy - Home component is about to be destroyed");
    }

}
