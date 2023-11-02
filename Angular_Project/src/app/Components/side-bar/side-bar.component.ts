import { Component } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  BoolClass:boolean=true;
  color:string="red";
  Margin:string="5px";
  padding:string="5px"
 

  ///Here Side will recieve Data From Form (form-validation) And Pass It for (Display-product-after-inserted)
  // array_Product:IProduct[]=[]
  // DataRecievedFromChild:string=''
  // GetData(data:any){
  //   this.array_Product.push(data);
  //   //  console.log(data)
  // }
}
