import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: 'departments',  component: DepartmentComponent },
  { path: '',  component: HomeComponent }];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
