import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Teacher} from "../shared/models/Teacher";
import {MatTable} from "@angular/material/table";



@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  @Input() teacherTitle: string = '';

  @Input() teachers: Teacher[] = [];
  ngOnInit(): void {
  }
  teacherFirstName: string[] = ['Fred', 'Carl', 'Ly', 'James', 'Earl', 'Peter'];
  teacherLastName: string[] = ['Franklyn', 'Tobias', 'Clause', 'Moet', 'Brave'];
  tAge: number[] = [26, 30, 40, 32, 45, 39, 28, 36];
  subject: string[] = ['Science','Physics','Mathematics','Programming','Java','Python'];
  addTeacher() {
    let tFirstName = this.teacherFirstName.at(Math.floor(Math.random() * this.teacherFirstName.length));
    let tLastName = this.teacherLastName.at(Math.floor(Math.random() * this.teacherLastName.length));
    let tAge = this.tAge.at(Math.floor(Math.random() * this.tAge.length));
    let subject = this.subject.at(Math.random()*this.subject.length);
    // @ts-ignore
    this.teachers.push(new Teacher(tFirstName, tLastName, tAge, subject));
  }

  displayedColumns: string[] = ['firstName','lastName','age','subject'];


  // @ts-ignore
  @ViewChild(MatTable) table: MatTable<Teacher>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * this.teachers.length);
    this.teachers.push(this.teachers[randomElementIndex]);
    this.table.renderRows();

  }
  removeData() {
    this.teachers.pop();
    this.table.renderRows();
  }

}
