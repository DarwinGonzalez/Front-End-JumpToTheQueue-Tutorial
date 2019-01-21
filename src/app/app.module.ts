import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormLoginModule } from './form-login/form-login-module';
import 'hammerjs';

// Application components and services
import { AppComponent } from './app.component';;
import { CoreModule } from './shared/core.module';
import { FormLoginComponent } from './form-login/form-login.component';
import { from } from 'rxjs';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './layout/header/header.component';
import { ViewQueueComponent } from './view-queue/view-queue.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    ViewQueueComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    AppRoutingModule,
    FormLoginModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }