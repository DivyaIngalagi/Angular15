import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'contacts'},
  {path:'contacts',component:ContactListComponent},
  {path:'contact/:id',component:ContactDetailComponent}//how we pass parameter
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
