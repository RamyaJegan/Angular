import { Inject,Injectable,Component } from '@angular/core';
import {SESSION_STORAGE, StorageService} from 'angular-webstorage-service';
// key that is used to access the data in local storage
const STORAGE_KEY = 'local_todolist';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  anotherTodolist = [];
    constructor(@Inject(SESSION_STORAGE) private storage:        StorageService) { }
     public storeOnLocalStorage(taskTitle: string): void {
        //get array of tasks from local storage
        const currentTodoList = this.storage.get(STORAGE_KEY) || [];
        // push new task to array
        currentTodoList.push({
           title: taskTitle,
           isChecked: false
        });
        
        // insert updated array to local storage
        this.storage.set(STORAGE_KEY, currentTodoList);
        console.log(this.storage
           .get(STORAGE_KEY) || 'LocaL storage is empty');

           localStorage.setItem("name","Muthu");
  if(localStorage){   //it checks browser support local storage or not
    let Name=localStorage.getItem("name");
    if(Name!=null){  //  it checks values here or not to the variable
       //do some stuff here...
    }
  }
    }
}
