import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [],
  directives: [MealComponent, NewMealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal"></meal-display>
  <new-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2])"></new-meal>
  `
})
export class MealListComponent {
  public mealList:  Meal[];

  createMeal(name: string, details: string, calories: number) {
    this.mealList.push(
      new Meal(name, details, calories)
    );
  }
}
