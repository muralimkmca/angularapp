import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { foodmodel } from 'src/Model/foodmodel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  baseUrl = "http://localhost:5000/api/foodie";

  constructor(private http : HttpClient ) { }

  getFoods() : Observable<foodmodel[]>
  {
    return this.http.get<foodmodel[]>(this.baseUrl);
  }

  addFoods(food:foodmodel): Observable<foodmodel>
  {
    return this.http.post<foodmodel>(this.baseUrl,food);
  }

}
