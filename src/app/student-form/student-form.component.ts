import { Component } from '@angular/core';
import {Student} from "../shared/models/Student";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  students: Student[] = [];

  firstName: string = '';
  lastName: string = '';

  sAge: number = 20;

  sGrade: number = 5;




  addStudent(studentForm: NgForm) {
    this.students.push(new Student(this.firstName, this.lastName, this.sAge, this.sGrade));
    studentForm.reset();
  }
}
