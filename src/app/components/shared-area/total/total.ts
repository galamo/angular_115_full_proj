import { Component } from '@angular/core';
import { StudentsService } from '../../../services/student-service';

@Component({
    selector: 'app-total',
    imports: [],
    templateUrl: './total.html',
    styleUrl: './total.css'
})
export class Total {
    public totalNumber: number = 0;
    constructor(private studentsService: StudentsService) { }
    ngOnInit() {
        this.studentsService.students$.subscribe(students => {
            this.totalNumber = students.length;
        });
    }
}
