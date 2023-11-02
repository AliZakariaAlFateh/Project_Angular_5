import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { SideBarComponent } from './Components/side-bar/side-bar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/Core/home/home.component';
import { StudentComponent } from './Components/Core/student/student.component';
import { ContactComponent } from './Components/Core/contact/contact.component';
import { NotFoundComponent } from './Components/Core/not-found/not-found.component';
import { StudentDetailsComponent } from './Components/Core/student-details/student-details.component';
import { StudentFormComponent } from './Components/Core/student-form/student-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SideBarComponent,
    HomeComponent,
    ContactComponent,
    NotFoundComponent,
    StudentDetailsComponent,
    StudentFormComponent,
    StudentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
