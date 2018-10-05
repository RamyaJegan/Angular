import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from '../home/home.component';
const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent
  },
  {
    path: 'Home',
    loadChildren:() => HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
