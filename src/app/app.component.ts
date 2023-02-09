import {Component, OnInit} from '@angular/core';
import {Student} from "./shared/models/Student";
import {Teacher} from "./shared/models/Teacher";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.students = this.fetchStudents();
    this.teachers = this.fetchTeachers();
  }
  title = 'Student-teacher task';

  studentsTitle = 'List of students';
  teacherTitle = 'List of teachers';

  students: Student[] = [];

  fetchStudents(): Student[] {
    let students: Student[] = [];

    students.push(new Student('Peters', 'Johnson', 20, 5));
    students.push(new Student('Anya', 'Dobor', 27, 4));
    students.push(new Student('Joel', 'Json', 23, 5));
    students.push(new Student('Liza', 'Allister', 30, 4));


    return students;
  }

  teachers: Teacher[] = [];

  fetchTeachers(): Teacher[] {
    let teachers: Teacher[] = [];

    teachers.push(new Teacher('Trey', 'Johnson', 30, 'Science'));
    teachers.push(new Teacher('Bree', 'McAdam', 29, 'Mathematics'));
    teachers.push(new Teacher('Samantha', 'Johnson', 28, 'Python'));
    teachers.push(new Teacher('Bree', 'McAdam', 29, 'Java'));

    return teachers;
  }


}
