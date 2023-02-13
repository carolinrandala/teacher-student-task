import { Component } from '@angular/core';
import {Student} from "../shared/models/Student";
import {Teacher} from "../shared/models/Teacher";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent {

  teachers: Teacher[] = [];

  tFirstName: string = '';
  tLastName: string = '';

  tAge: number = 0;

  tSubject: string = '';



  addTeacher(teacherForm: NgForm) {
    this.teachers.push(new Teacher(this.tFirstName, this.tLastName, this.tAge, this.tSubject));
    teacherForm.reset();
  }
}
