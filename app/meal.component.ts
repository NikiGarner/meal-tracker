import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div>
      <label id="date">Date: {{meal.date}}</label>
      <label id="name">Name: {{meal.name}}</label>
      <label id="details">Details: {{meal.details}}</label>
      <label id="calories">Calloris: {{meal.calories}}</label>
    </div>
  `
})
export class MealComponent {
  public meal: Meal;
}
