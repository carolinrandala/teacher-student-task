import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Student} from "../shared/models/Student";
import {MatTable} from "@angular/material/table";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  studentTitle: string = '';
 students: Student[] = [];


  studentFirstName: string[] = ['Eva', 'Mari', 'Annika', 'Jane', 'Roberto', 'Thomas'];
  studentLastName: string[] = ['Adamson', 'Anton', 'Reel', 'Jordan', 'Steel'];

  sAge: number[] = [18, 20, 22, 19, 23, 21, 26];

  sGrade: number[] = [4, 5, 3, 5, 2, 3, 4];

  displayedColumns: string[] = ['firstName','lastName', 'age', 'grade'];

  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Student>;


  addStudent() {
    let sFirstName = this.studentFirstName.at(Math.floor(Math.random() * this.studentFirstName.length));
    let sLastName = this.studentLastName.at(Math.floor(Math.random() * this.studentLastName.length));
    let sAge = this.sAge.at(Math.floor(Math.random() * this.sAge.length));
    let sGrade = this.sGrade.at(Math.floor(Math.random() * this.sGrade.length));

    // @ts-ignore
    this.students.push(new Student(sFirstName, sLastName, sAge, sGrade));
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.students.length);
    this.students.push(this.students[randomElementIndex]);
    this.table.renderRows();
  }

  removeData() {
    this.students.pop();
    this.table.renderRows();
  }

  fetchStudents(): Student[] {
    let students: Student[] = [];

    students.push(new Student('Peters', 'Johnson', 20, 5));
    students.push(new Student('Anya', 'Davidson', 27, 4));
    students.push(new Student('Joel', 'Json', 23, 5));
    students.push(new Student('Liza', 'Allister', 30, 4));


    return students;
  }
  ngOnInit(): void {
    this.students = this.fetchStudents();
  }
}
