import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { ContactusComponent } from './contactus/contactus.component';

const routes: Routes = [
{path:'home', component: HomeComponent},
{path:'aboutus', component:AboutusComponent},
{path: 'contactus', component:ContactusComponent},
{path:'login', component:LoginComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export  const routeComponents=[HomeComponent, AboutusComponent,ContactusComponent,LoginComponent];