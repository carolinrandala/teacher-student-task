import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TeacherComponent} from './teacher/teacher.component';
import {StudentComponent} from './student/student.component';
import {TeacherFormComponent} from './teacher/teacher-form/teacher-form.component';
import {StudentFormComponent} from './student/student-form/student-form.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {StudentModule} from "./student/student.module";
import {TeacherModule} from "./teacher/teacher.module";
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [ //creating a routes object to make different pages
  {
    path: 'teacher',
    component: TeacherComponent
  },
  {
    path: 'create-teacher',
    component: TeacherFormComponent
  },
  {
    path: 'student',
    component: StudentComponent
  },
  {
    path: 'create-student',
    component: StudentFormComponent
  }
  ];
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    StudentComponent,
    TeacherFormComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    StudentModule,
    TeacherModule,
    RouterModule.forRoot(appRoutes) //passing created json arrays
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
