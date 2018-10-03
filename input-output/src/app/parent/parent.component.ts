import { Component, OnInit } from '@angular/core';

interface r{
  id:number;
  title:string;
  
}
declare var $: any;
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],

})

export class ParentComponent implements OnInit {
 public receiveData:number;
 public iData:number;
 id:any;
 constructor() { }
 data:Array<r>=[
   {id:0,title:"Insight: Today Agenda : 27-Sep-2018"},
   {id:1,title:"Welcome Madhusudhanan to HMS Family"},
   {id:2,title:"Regarding Training"}
 ]
 
  ngOnInit() {
   console.log(this.data)
  

  }
  checkInputBox(){
    console.log("Received1",this.iData);
    for (let item of this.data){
      console.log(item,$("#"+item.id).prop("checked"));
      if(this.id == item.id && this.iData == 1){        
        console.log("Eventtt",$("#"+item.id).prop("checked",true)  );
      }
    }
  }
  uncheckInputBox(){
    console.log("Received1",this.iData);
    for (let item of this.data){
      console.log(item,$("#"+item.id).prop("checked"));
      if(this.id == item.id && this.iData == 0){        
        console.log("Eventtt",$("#"+item.id).prop("checked",false)  );
      }
    }
  }
  send(id){
    this.iData = 0;
    console.log("Received",this.iData);
    this.id=id;
    console.log("item id",this.id)
  }
  

}
