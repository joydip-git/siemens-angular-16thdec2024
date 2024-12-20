import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';

const sharedRoutes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  }
]

@NgModule({
  declarations: [
    DashBoardComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [DashBoardComponent]
})
export class SharedModule { }
