import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
@Input() sendData:any=0;
@Input() linkedClicked:any=0;
@Output() childEvent=new EventEmitter;
@Output() i=new EventEmitter;
navMenuState: string;
check:boolean;
onLinkedClicked() {  
  this.i.emit(1);
 
}
unCheckClicked(){
  this.i.emit(0);
 
}
// data:any= 'Hi Team,'+ 

// 'As discussed, I am sharing a reference link for the Project related to "Project Profit & Loss". '+

// 'Kindly go through and bring your value addition towards this Project. We can have the next meeting on 28thSep 18 at 11 AM.';

data:any=[
  {id:0,From:"Insight:<insight@hakunamatata.in>",To:"ramya.k@hakunamatata.in",content:"For your kind information, We have shared your today's Meetings, Events and tasks.Kindly check it out below.Today your In-Time : 09:12 .",Regards:"Insight"},
  {id:1,From:"Preethi HRD:<preethi@hakunamatata.in>",To:"ramya.k@hakunamatata.in",content:"Welcoming Madhusudhanan to Our Family! ",Regards:"Preethi"},
  {id:2,From:"Hareesh:<hareesh@hakunamatata.in>",To:"ramya.k@hakunamatata.in",content:"Thanks for the update",Regards:"Hareesh"}
]
  constructor() { }
 
  ngOnInit() {    
    this.childEvent.emit(this.data);
    this.i.emit(0);
  }
}
