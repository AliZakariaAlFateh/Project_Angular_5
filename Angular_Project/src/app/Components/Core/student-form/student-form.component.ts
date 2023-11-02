import { Component,OnInit,Output } from '@angular/core';
import { IStudent } from '../../Model/istudent';
import { StudentsService } from 'src/app/Services/students.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit{



  @Output() studentName:string="";
  @Output() studentAge:number=0;
  @Output() studentSchool:string="";
  @Output() studentAddress:number=0;
  get isNameValid(){
    return this.studentName !='' && this.studentName.length>3
   }

   get isAgeValid(){
    return this.studentAge !=0 && this.studentAge<17
   }

   get isSchoolValid(){
    return this.studentSchool !='' && this.studentSchool.length>12
   }

   get isAddressValid(){
    return this.studentAddress !=0 && this.studentAddress<12
   }


   student:IStudent={
    id:0,
    name:'',
    age:0,
    school:'',
    address:''
  }

  studentId:number=0;
    //we use a (Router) service to make redirect after submit form and save data ...
   //we use an (ActivatedRoute) to catch ID from url through OnInit method ...

  constructor(private stdservice:StudentsService,private activatedRoute:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.studentId=this.activatedRoute.snapshot.params['id'];
    if(this.studentId != 0)
    {
      let prod=this.stdservice.getById(this.studentId)
      if(prod) 
       this.student=prod
    }
  }



   GetData(e:Event){
    e.preventDefault();


    console.log(this.student)
    if(this.studentId)
    {
      //edit
      this.stdservice.edit(this.studentId,this.student)

    }else{
      //add
      this.stdservice.add(this.student)

    }
 
    //go to product
    this.router.navigate(['/student']);

   }


}
