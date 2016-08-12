import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div>
    <h3>Log a Meal</h3>
    <input placeholder="Date MM/DD/YYYY" class="input-lg" #newDate>
    <input placeholder="Food name" class="input-lg" #newName>
    <input placeholder="Meal Details" class="input-lg" #newDetails>
    <input placeholder="Calories" class="input-lg" #newCalories>
    <button (click)="addMeal(newDate, newName, newDetails, newCalories)">Add</button>
  </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]> = new EventEmitter();
  constructor(){
    this.onSubmitNewMeal = new EventEmitter()
  }
  addMeal(userDate: HTMLInputElement, userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement){
    this.onSubmitNewMeal.emit([userDate.value, userName.value, userDetails.value, userCalories.value]);
    userDate.value="";
    userName.value="";
    userDetails.value="";
    userCalories.value="";
  }
}
