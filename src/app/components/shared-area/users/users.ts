import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-users',
    imports: [CommonModule],
    templateUrl: './users.html',
    styleUrl: './users.css'
})
export class Users {

    students$: Observable<string[]> = of(["Kalimi", "Talya", "Idan", "Tal", "Ofek"])
    studentsLocal: string[] = []

    ngOnInit(): void {
        this.students$.subscribe((names) => {
            this.studentsLocal = names;
        })
    }
}
