import { Component, OnInit } from '@angular/core';
import { foodmodel } from 'src/Model/foodmodel';
import { FoodService } from 'src/services/food.service';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css']
})
export class AddfoodComponent implements OnInit {

  fooditems : foodmodel = {
    id: '',
    foodName:'',
    foodDesc:''
  }
  
  constructor(private foods : FoodService) { }

  ngOnInit(): void {
  }

  onSubmit(data:any){
      if(this.fooditems.id==='')
      {
        this.foods.addFoods(data).subscribe((result)=> {console.log(result)})
      }
  }
}
