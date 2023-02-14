import { Component } from '@angular/core';
import {Student} from "../../shared/models/Student";
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

  sAge: number = 0;

  sGrade: number = 0;

  isShowForm: boolean = false;



  addStudent(studentForm: NgForm) {
    this.students.push(new Student(this.firstName, this.lastName, this.sAge, this.sGrade));
    studentForm.reset(); //Clears all the values
  }

  showStudentForm() {
    this.isShowForm = true;
  }
}
