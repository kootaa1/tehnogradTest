import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoDataService } from './todo-data.service';
import { ApiService } from './api.service';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
    providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
