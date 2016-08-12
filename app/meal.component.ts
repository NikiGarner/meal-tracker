import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="list">
      <p id="name"><span class="title">Name:</span> {{meal.name}}</p>
      <p id="details"><span class="title">Details:</span> {{meal.details}}</p>
      <p id="calories"><span class="title">Calories:</span> {{meal.calories}}</p>
    </div>
    <hr>
  `
})
export class MealComponent {
  public meal: Meal;
}
