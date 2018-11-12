import { Component,Directive} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MUSIC';
  count=0;
  MusicList=[];
  music:any;
  PlayMusic(id){
    this.music=document.getElementById(id);
    this.music.play();
  }
  AddMusic(event){
    if(this.count==1){
        this.MusicList.push(event.target.files[0]);
        console.log('MusicLibrary:',this.MusicList,event.target.files[0])
      
    }
    else{
      console.log('c:',this.count)
    }
   this.count=1;
  }
}
