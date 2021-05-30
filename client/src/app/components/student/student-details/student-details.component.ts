import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/core/services/student/student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  currentStudent = null;
  message = '';

  constructor(
    private studentService : StudentService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getStudent(this.route.snapshot.paramMap.get('id'));
  }


  getStudent(id): void {
    this.studentService.read(id)
      .subscribe(
        student => {
          this.currentStudent = student;
          console.log(student);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status): void {
    const data = {
      id: this.currentStudent.name,
      name: this.currentStudent.name,
      phone: this.currentStudent.phone,
      age:this.currentStudent.age,
    };

    this.studentService.update(this.currentStudent.id, data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateStudent(): void {
    const data = {
      name: this.currentStudent.name,
      phone: this.currentStudent.phone,
      age:this.currentStudent.age,
    };

    this.studentService.update(this.currentStudent.id, data)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The student was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteStudent(): void {
    this.studentService.delete(this.currentStudent.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/students']);
        },
        error => {
          console.log(error);
        });
  }

}

