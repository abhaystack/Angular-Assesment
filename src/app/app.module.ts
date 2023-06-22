import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DescriptionComponent } from './description/description.component';
import { SideDetailComponent } from './side-detail/side-detail.component';

const Routes:Routes=[
  {
    path: "",
    redirectTo: "Login",
    pathMatch: "full",
  },
  {path:'Login',component:LoginComponent},
  {path:'Register',component:RegisterComponent},
  {path:'Dashboard',component:DashboardComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InputComponent,
    ButtonComponent,
    RegisterComponent,
    DashboardComponent,
    DescriptionComponent,
    SideDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
