export class Teacher {
  firstName: string;
  lastName: string;
  email: string;

  age: number;
  subject: string;


  constructor(firstName: string, lastName: string, email: string, age: number, subject: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.subject = subject;
  }
}
