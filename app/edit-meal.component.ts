import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['meal'],
  template: `
    <div id="edit" class="meal-form">
      <h3>Edit Meal: </h3>
      <input [(ngModel)]="meal.name" id="input" class="col-sm-8 input-lg keg-form"/>
      <input [(ngModel)]="meal.details" id="input" class="col-sm-8 input-lg keg-form"/>
      <input [(ngModel)]="meal.calories" id="input" class="col-sm-8 input-lg keg-form"/>
    </div>
  `
})
export class EditMealComponent {
  public meal: Meal;
}
