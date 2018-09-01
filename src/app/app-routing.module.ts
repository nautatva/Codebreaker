import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'departments', component: DepartmentComponent },
  { path: '', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },

  { path: 'team', component: TeamComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
