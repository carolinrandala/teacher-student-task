export class Student {
  firstName: string;

  lastName: string;
  age: number;
  grade: number;


  constructor(firstName: string, lastName: string, age: number, grade: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.grade = grade;
  }
}
