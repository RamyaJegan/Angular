import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';
import { StorageServiceModule } from 'angular-webstorage-service';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
const routes:Routes=[
  {
    path:'',
    redirectTo:'Login',
    pathMatch:'full'
  }, 
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
   {
     path:'Home',
     component:HomeComponent
   }
 ]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParentComponent,
    ChildComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    StorageServiceModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
