import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path:'', redirectTo:"userlist" ,pathMatch:"full"},
  {path:'userlist',component:UserlistComponent},
  {path:'details' , component:InfoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
