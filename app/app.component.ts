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
      new Meal("Bagel", "Cinnamon-raisin bagel with butter for breakfast", 500),
      new Meal("Kale Salad", "Kale salad with cranberries and sunflower seeds for lunch", 200),
      new Meal("Chicken Garlic Pizza", "3 slices of pizza", 1000),
      new Meal("Bagel", "Cinnamon-raisin bagel with butter for breakfast", 500),
      new Meal("Mocha", "Grande mocha for Starbucks", 400),
      new Meal("Kale Salad", "Kale salad with cranberries and sunflower seeds for lunch", 200),
      new Meal("Hummus", "1/2 cup for lunch", 200),
      new Meal("MultiGrain Chips", "Food is good chips...nomnom for lunch", 150),
      new Meal("Salmon", "1 patty for dinner", 150),
      new Meal("Fettuccine", "2 cups of pasta with sauce for dinner", 900),
    ]
  }
}
