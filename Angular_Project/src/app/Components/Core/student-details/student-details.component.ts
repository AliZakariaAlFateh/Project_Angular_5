import { Component, OnInit } from '@angular/core';
import { IStudent } from '../../Model/istudent';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/Services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{

  studentId:number=0;
  student: IStudent|undefined;

  //inject for Activated routing to catch Id for the product you want display its details ...
  constructor(private activatedRoute:ActivatedRoute , private stdService:StudentsService){

  }
  ngOnInit(): void {
        this.studentId=this.activatedRoute.snapshot.params['id'];
        this.student=this.stdService.getById(this.studentId);
  }

}
