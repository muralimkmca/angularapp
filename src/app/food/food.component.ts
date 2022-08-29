import { Component, OnInit } from '@angular/core';
import { foodmodel } from 'src/Model/foodmodel';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodlist:foodmodel[] = [];

  fooditems : foodmodel = {
    id: '',
    foodName:'',
    foodDesc:''
  }

  constructor(private foods : FoodService) { }

  ngOnInit(): void {
    this.foods.getFoods().subscribe(response => 
      {this.foodlist = response;
      console.log(response);})    
  }
}
