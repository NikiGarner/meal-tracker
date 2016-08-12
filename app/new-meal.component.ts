import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div>
    <h3>Log a Meal</h3>
    <input placeholder="Food name" class="input-lg" #newName>
    <input placeholder="Meal Details" class="input-lg" #newDetails>
    <input placeholder="Calories" class="input-lg" #newCalories>
    <button (click)="addMeal(newName, newDetails, newCalories)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]> = new EventEmitter();
  constructor(){
    this.onSubmitNewMeal = new EventEmitter()
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([mealName.value, mealDetails.value, mealCalories.value]);
    mealName.value="";
    mealDetails.value="";
    mealCalories.value="";
  }
}
