import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { StudentCraeteComponent } from './components/student/student-craete/student-craete.component';
import { StudentListComponent } from './components/student/student-list/student-list.component';
import { AuthGuard } from './core/helpers/guards/auth.guard';

const routes: Routes = [

  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
// otherwise redirect to home
{ path: '**', redirectTo: '' },

  // { path: '', redirectTo: 'students', pathMatch: 'full' },
  // { path: 'students', component: StudentListComponent },
  // { path: 'products/:id', component: StudentCraeteComponent },
  // { path: 'create', component: StudentCraeteComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
