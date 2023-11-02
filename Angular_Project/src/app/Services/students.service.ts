import { Injectable } from '@angular/core';
import { IStudent } from '../Components/Model/istudent';
import { StudenttList } from '../Components/Model/studentList';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:IStudent[];
  constructor() {
    this.students=StudenttList;
   }

   getall():IStudent[]{
    return this.students;
   }
    
   getById(id:number):IStudent|undefined{

    return this.students.find((std)=>std.id==id);
   }
   

   add(prod:IStudent):void{
    let nextId=StudenttList[StudenttList.length-1].id+1;
    prod.id=nextId;
    this.students.push(prod);
   }
 

   edit(id:number,std:IStudent):void{
    let index=this.students.findIndex((s)=>s.id==id)
    this.students[index].name=std.name;
    this.students[index].age=std.age;
    this.students[index].school=std.school;
    this.students[index].address=std.address;
   }


   delete(id:number):void{
    let index=this.students.findIndex((s)=>s.id==id)
    if(index!=-1)
    this.students.splice(index,1)   
   }



   
}
