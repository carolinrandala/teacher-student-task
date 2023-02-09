export class Teacher {
  firstName: string;
  lastName: string;

  age: number;
  subject: string;


  constructor(firstName: string, lastName: string, age: number, subject: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.subject = subject;
  }
}
