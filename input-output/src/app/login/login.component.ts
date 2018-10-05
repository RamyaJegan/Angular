import { Component, OnInit, Inject, Injectable } from '@angular/core';
//import { LOCAL_STORAGE, StorageService, SESSION_STORAGE} from 'angular-webstorage-service';
import { Router } from '@angular/router';
const key = 'local_storage';
var count=0;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

@Injectable()
export class LoginComponent implements OnInit {
//Empty 2 way Binding Data variable
 login_item:any={user:null,pass:null};

//Array to hold Local Storage Data
 d:any=[{}];

// Constructor Initialization of Storage, Routing
constructor(
  //@Inject(LOCAL_STORAGE) private Storage: StorageService,
  private router:Router) { }

ngOnInit() {}

// Move to Registration when click Sign UP
  gotoReg(){
    document.getElementById("Register").style.display="inline-block";
    document.getElementById("Login").style.display="none";
    this.login_item={user:null,pass:null};
  }

// Move to Login when click Sign IN
  gotoLog(){
    document.getElementById("Login").style.display="inline-block";
    document.getElementById("Register").style.display="none";
   // this.login_item={user:null,pass:null};
  }

// LOGIN 
  Login(d)
  {
    // Get's storage value
    //this.d=this.Storage.get(key) ;  
    this.d=JSON.parse(localStorage.getItem('login'));
    // Empty Field Validation

    if(d.user == null){
      document.getElementById("val1").style.display="inline-block";
    }else if(d.pass == null){
      document.getElementById("val1").style.display="none";
      document.getElementById("val2").style.display="inline-block";
    }
    // LOGIN LOGIC
    for(let i=0;i<this.d.length;i++){
      if(this.d[i].user == d.user && this.d[i].pass == d.pass){       
      //  console.log("Got from Local",this.Storage.get(key),this.d || 'LocaL storage is empty');
         count=1;
         break;
      }
    }
    if(count==0){
      alert("Invalid Username and Password") 
    }
    else{
      document.getElementById("val2").style.display="none";
      document.getElementById("Login").style.display="none";

      // If Success Route the Page
      this.router.navigate(['/admin']);      
    }   
  }

 // Register
  Register(d)
  {
    // Empty Field Validation    
    if(d.user == null){
      document.getElementById("val3").style.display="inline-block";
    }else if(d.pass == null){
      document.getElementById("val3").style.display="none";
      document.getElementById("val4").style.display="inline-block";
    }

    // Logic for Registration
    else{
      document.getElementById("val4").style.display="none";
      this.d.push({
        user:d.user,
        pass:d.pass
      });
      //PUSh Data value from data array to Local Storage
      localStorage.setItem('login', JSON.stringify(this.d));
      //this.Storage.set(key,this.d);
      this.gotoLog();
    }
    
  }

}
