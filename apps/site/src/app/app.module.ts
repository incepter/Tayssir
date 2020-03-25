import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequestComponent } from './request/request.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RequestComponent],
  imports: [BrowserModule, HttpClientModule, TabsModule.forRoot(),
    FormsModule ,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
