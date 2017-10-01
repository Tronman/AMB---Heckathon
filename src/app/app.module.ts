import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
import { OuterNavComponent } from './home/outer-nav/outer-nav.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { NavComponent } from './dashboard/nav/nav.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { FooterComponent } from './footer/footer.component';
import { SubNavComponent } from './dashboard/sub-nav/sub-nav.component';

const homeRoutes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: 'login',
    component: LoginComponent
  },{
    path: 'register',
    component: RegisterComponent
  }]
  },{
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      component: OverviewComponent
    }]
  },{
    path: '**',
    component: Page404Component
}];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    Page404Component,
    OuterNavComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    OverviewComponent,
    FooterComponent,
    SubNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(homeRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
