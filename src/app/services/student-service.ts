import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Student {
    id: number;
    name: string;
    grade: string;
}

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    // Step 1: Create a private BehaviorSubject to hold the current list
    private studentsSubject = new BehaviorSubject<Student[]>([{ id: 111, name: "user_1", grade: "100" }]);

    // Step 2: Expose it as an Observable for components to subscribe to
    students$: Observable<Student[]> = this.studentsSubject.asObservable();

    // Step 3: Add a getter for the current value (if needed)
    get students(): Student[] {
        return this.studentsSubject.getValue();
    }

    // Step 4: Define methods to modify the students list
    addStudent(student: Student) {
        const updated = [...this.students, student];
        this.studentsSubject.next(updated);
    }

    updateStudent(updatedStudent: Student) {
        const updated = this.students.map(s =>
            s.id === updatedStudent.id ? updatedStudent : s
        );
        this.studentsSubject.next(updated);
    }

    removeStudent(id: number) {
        const updated = this.students.filter(s => s.id !== id);
        this.studentsSubject.next(updated);
    }

    clearStudents() {
        this.studentsSubject.next([]);
    }
}
