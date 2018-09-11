import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { DepartmentComponent } from './department/department.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ScrollSpyDirective } from './department/scroll-spy.directive';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TeamComponent } from './team/team.component';
import { FooterComponent } from '../shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    ScrollSpyDirective,
    TeamComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
