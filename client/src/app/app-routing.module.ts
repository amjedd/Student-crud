import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentCraeteComponent } from './components/student/student-craete/student-craete.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full' },
  { path: 'students', component: StudentListComponent },
  { path: 'products/:id', component: StudentCraeteComponent },
  { path: 'create', component: StudentCraeteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
