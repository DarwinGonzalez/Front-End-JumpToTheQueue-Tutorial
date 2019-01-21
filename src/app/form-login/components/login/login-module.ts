import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/shared/core.module';
//import { LoginAdapter } from './services/login.adapter';
import { LoginService } from './services/login.service';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [CommonModule, CoreModule],
  providers: [LoginService],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}