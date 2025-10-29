import { Component, OnInit } from '@angular/core';
import { Student, StudentsService } from '../../../services/student-service';
import { CommonModule } from '@angular/common';


@Component({
    standalone: true,
    providers: [CommonModule],
    selector: 'app-students-list',
    templateUrl: "./users.html"
})
export class StudentsListComponent implements OnInit {
    students: Student[] = [];

    constructor(private studentsService: StudentsService) { }

    ngOnInit() {
        this.studentsService.students$.subscribe(students => {
            console.log("This should run every change!")
            console.log(students)
            this.students = students;
        });
    }

    addRandomStudent() {
        const newStudent: Student = {
            id: Math.random(),
            name: 'Student ' + (this.students.length + 1),
            grade: 'A'
        };
        this.studentsService.addStudent(newStudent);
    }
}
