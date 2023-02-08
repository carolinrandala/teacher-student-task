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

  students: Student[] = [];

  fetchStudents(): Student[] {
    let students: Student[] = [];

    students.push(new Student('Peters', 'Johnson', 20, 5));
    students.push(new Student('Anya', 'Dobor', 27, 4));
    students.push(new Student('Joel', 'Json', 23, 5));
    students.push(new Student('Liza', 'Allister', 30, 4));
    students.push(new Student('Maria', 'Samsaro', 27, 4));
    students.push(new Student('Jessica', 'Json', 21, 4));

    return students;
  }
  studentFirstName: string[] = ['Eva', 'Mari', 'Annika', 'Jane', 'Roberto', 'Thomas'];
  studentLastName: string[] = ['Adamson', 'Anton', 'Reel', 'Jakarto', 'Steel'];

  addStudent() {
    let sFirstName = this.studentFirstName.at(Math.floor(Math.random() * this.studentFirstName.length));
    let sLastName = this.studentLastName.at(Math.floor(Math.random() * this.studentLastName.length));

    // @ts-ignore
    this.students.push(new Student(sFirstName, sLastName, 20, 4));
  }

  teachers: Teacher[] = [];

  fetchTeachers(): Teacher[] {
    let teachers: Teacher[] = [];

    teachers.push(new Teacher('Trey', 'Johnson','TtJ@gmail.com', 30, 'Science'));
    teachers.push(new Teacher('Bree', 'McAdam', 'B.Adam@gmail.com', 29, 'Mathematics'));
    teachers.push(new Teacher('Samantha', 'Johnson','SamJohn@gmail.com', 28, 'Python'));
    teachers.push(new Teacher('Bree', 'McAdam', 'B.Adam@gmail.com', 29, 'Java'));
    teachers.push(new Teacher('Evert', 'Broad','E.Br@gmail.com', 32, 'HTML'));
    teachers.push(new Teacher('Diana', 'Adamson', 'adamson@gmail.com', 31, 'Cyber-Security'));

    return teachers;
  }

  teacherFirstName: string[] = ['Fred', 'Carl', 'Ly', 'James', 'Earl', 'Peter'];
  teacherLastName: string[] = ['Franklyn', 'Tobias', 'Clause', 'Moet', 'Brave'];
  addTeacher() {
    let tFirstName = this.teacherFirstName.at(Math.floor(Math.random() * this.teacherFirstName.length));
    let tLastName = this.teacherLastName.at(Math.floor(Math.random() * this.teacherLastName.length));
    // @ts-ignore
    this.teachers.push(new Teacher(tFirstName, tLastName,'email@gmail.com', 40, 'Science'));

  }

}
