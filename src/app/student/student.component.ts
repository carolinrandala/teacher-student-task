import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../shared/models/Student";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  ngOnInit(): void {
  }

  @Input() studentTitle: string = '';
  @Input() students: Student[] = [];


  studentFirstName: string[] = ['Eva', 'Mari', 'Annika', 'Jane', 'Roberto', 'Thomas'];
  studentLastName: string[] = ['Adamson', 'Anton', 'Reel', 'Jakarto', 'Steel'];

  sAge: number[] = [18, 20, 22, 19, 23, 21, 26];

  sGrade: number[] = [4, 5, 3, 5, 2, 3, 4];

  addStudent() {
    let sFirstName = this.studentFirstName.at(Math.floor(Math.random() * this.studentFirstName.length));
    let sLastName = this.studentLastName.at(Math.floor(Math.random() * this.studentLastName.length));
    let sAge = this.sAge.at(Math.floor(Math.random() * this.sAge.length));
    let sGrade = this.sGrade.at(Math.floor(Math.random() * this.sGrade.length));

    // @ts-ignore
    this.students.push(new Student(sFirstName, sLastName, sAge, sGrade));
  }
}
