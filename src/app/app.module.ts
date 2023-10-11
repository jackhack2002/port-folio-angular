import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { ForcontactComponent } from './forcontact/forcontact.component';
import { ActivitiesComponent } from './activities/activities.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    EducationComponent,
    ProjectComponent,
    SkillsComponent,
    ForcontactComponent,
    ActivitiesComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
