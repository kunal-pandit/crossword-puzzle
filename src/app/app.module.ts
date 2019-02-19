import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrosswordGridComponent } from './crossword-grid/crossword-grid.component';
import { MatGridListModule } from '@angular/material';
import { CluesComponent } from './clues/clues.component';
import { TimerComponent } from './timer/timer.component';
import { ResponsesComponent } from './responses/responses.component';
import { HomeComponent } from './home/home.component';

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
  declarations: [
    AppComponent,
    CrosswordGridComponent,
    CluesComponent,
    TimerComponent,
    ResponsesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
