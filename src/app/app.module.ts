import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PollutionComponent } from './pollution/pollution.component';
import { PollutionService } from './pollution.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { BookmarkComponent } from './bookmark/bookmark.component';

@NgModule({
  declarations: [
    AppComponent,
    PollutionComponent,
    LoginComponent,
    RegistrationComponent,
    BookmarkComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PollutionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
