import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OurservicesComponent } from './ourservices/ourservices.component';

const routes: Routes = [

  {path:'', component:MainpageComponent},
  {path:'contact', component:ContactusComponent},
  {path:'application', component:OurservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
