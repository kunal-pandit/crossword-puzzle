import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ResponsesComponent } from './../responses/responses.component'
import { HomeComponent } from './../home/home.component'

const appRoutes: Routes = [
  {
    path: 'results',
    component: ResponsesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
