import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/services/student/student.service';

@Component({
  selector: 'app-student-craete',
  templateUrl: './student-craete.component.html',
  styleUrls: ['./student-craete.component.scss']
})
export class StudentCraeteComponent implements OnInit {

  student = {name:'',phone:'',age:''};
  submitted = false;

  constructor(private studentService : StudentService) { }

  ngOnInit(): void {
  }

  createStudent(): void {
    const data = {
      name: this.student.name,
      phone: this.student.phone,
      age:this.student.age
    };

    this.studentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newStudent(): void {
    this.submitted = false;
    this.student = {
      name: '',
      phone: '',
      age: ''
    };
  }

}
