import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Meal Tracker</h1>
      <meal-list [mealList]="meals"></meal-list>
    </div>
  `
})
export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Clyde Common", "American", "SW 11th & Stark", 4, [], []),
      new Meal("808", "Hawaiian", "SW 10th & Alder", 2, [], []),
      new Meal("Tabor", "Czech", "SW 5th & Oak", 2, [], []),
    ]
    console.log("Meals created")
  }

}
