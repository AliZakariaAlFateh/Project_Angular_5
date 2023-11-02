import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../Model/istudent';
import { StudenttList } from '../../Model/studentList';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent implements OnInit {
  students:IStudent[]=[];
  
  //here i 'll inject services at constructor ----> (prodservice)....
  constructor(private stdservice:StudentsService){

  }

  ngOnInit(): void {
    this.students=this.stdservice.getall();
  }

  //then i use the services in onInit

  Delete(id:number){

    var res=confirm('Are you sure to delete this item .')
    if(res)
    {
      this.stdservice.delete(id);
    }
  }

}
