import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCraeteComponent } from './student-craete.component';

describe('StudentCraeteComponent', () => {
  let component: StudentCraeteComponent;
  let fixture: ComponentFixture<StudentCraeteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCraeteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCraeteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
