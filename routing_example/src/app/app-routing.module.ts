import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { OurCompanyComponent } from './about/our-company/our-company.component';
import { OurEmployeesComponent } from './about/our-employees/our-employees.component';
import { ContactComponent } from './contact/contact.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  // {path:'',pathMatch:'full',redirectTo:'users'}, if we want to start from this
  // {path:'users',pathMatch:'full',component:UsersComponent},boyh 1& second
  {path:'',pathMatch:'full',component:UsersComponent},//above three are routing example
  // {path:'about',component:AboutComponent},
  {
    path:"about",
    children:[
      {
        path:"",
      component:OurEmployeesComponent
    },
    {
      path:"our_company",
      component:OurCompanyComponent
    },
  ],
},//nested routing
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'users'}//otherwise it will go directly to app.component.html
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
