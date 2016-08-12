import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [],
  directives: [],
  template: `
  <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal"></meal-display>
  <new-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2], $event[3])"></new-meal>
  `
})
export class MealListComponent {
  public mealList:  Meal[];

  createAlbum(date: number, name: string, details: string, calories: number) {
    this.mealList.push(
      new Meal(date, name, details, calories)
    )};
}
