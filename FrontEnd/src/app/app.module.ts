import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DashboardComponent } from './tasks/dashboard/dashboard.component';
import { CreateComponent } from './tasks/create/create.component'
import { MatTableModule } from '@angular/material/table'  
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { LogoutComponent } from './users/logout/logout.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTableModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
