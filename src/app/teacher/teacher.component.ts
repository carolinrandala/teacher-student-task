import {Component, Input, OnInit} from '@angular/core';
import {Teacher} from "../shared/models/Teacher";

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
  tAge: number[] = [22, 30, 40, 32, 45, 39, 28, 36];
  subjects: string[] = ['Science','Physics','Mathematics','Programming','Java','Python'];
  addTeacher() {
    let tFirstName = this.teacherFirstName.at(Math.floor(Math.random() * this.teacherFirstName.length));
    let tLastName = this.teacherLastName.at(Math.floor(Math.random() * this.teacherLastName.length));
    let tAge = this.tAge.at(Math.floor(Math.random() * this.tAge.length));
    let subject = this.subjects.at(Math.random()*this.subjects.length);
    // @ts-ignore
    this.teachers.push(new Teacher(tFirstName, tLastName, tAge, subject));

  }

}
