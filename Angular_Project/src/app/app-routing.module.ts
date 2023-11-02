import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Core/home/home.component';
import { StudentComponent } from './Components/Core/student/student.component';
import { ContactComponent } from './Components/Core/contact/contact.component';
import { NotFoundComponent } from './Components/Core/not-found/not-found.component';
import { StudentDetailsComponent } from './Components/Core/student-details/student-details.component';
import { StudentFormComponent } from './Components/Core/student-form/student-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:''},
  {path:'Ali',component:StudentComponent},
  {path:'student',component:StudentComponent},
  {path:'contact',component:ContactComponent},
  {path:'student/details/:id',component:StudentDetailsComponent},
  {path:'student/edit/:id',component:StudentFormComponent},
  {path:'student/add',component:StudentFormComponent},
  {path:'**',component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
