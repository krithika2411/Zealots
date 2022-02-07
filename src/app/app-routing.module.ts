import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [ {
  path: 'home',
  component: HomeComponent,  
},
{
  path: 'navbar',
  component: NavbarComponent,  
},
{
  path: 'signin',
  component: SigninComponent,  
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
