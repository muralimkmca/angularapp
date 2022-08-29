import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfoodComponent } from './addfood/addfood.component';
import { AppComponent } from './app.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent,
  },
  {
    path:'home',
    component:AppComponent,
  },
  {
    path:'food',
    component:FoodComponent,
  },
  {
    path:'addfood',
    component:AddfoodComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
