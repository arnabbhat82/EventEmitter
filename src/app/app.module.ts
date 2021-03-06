import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ComdatasharingComponent } from './comdatasharing/comdatasharing.component';
import { ParentComponent } from './comdatasharing/parent/parent.component';
import { SiblingComponent } from './comdatasharing/sibling/sibling.component';
import { ChildComponent } from './comdatasharing/parent/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FirstComponent,
    SecondComponent,
    ComdatasharingComponent,
    ParentComponent,
    SiblingComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
