import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealComponent } from './edit-meal.component';
import { LowCaloriesPipe } from './calories.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onSelectedMeal'],
  pipes: [LowCaloriesPipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template: `
  <new-meal (onSubmitNewMeal) = "createMeal($event[0], $event[1], $event[2])"></new-meal>
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="lowCalories">Show Low Calorie Meals</option>
    <option value="highCalories">Show High Calorie Meals</option>
  </select>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
  <meal-display *ngFor="#currentMeal of mealList | lowCalories:filterCalories" (click)="editMeal(currentMeal)" [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal" >
  </meal-display>

  `
})
export class MealListComponent {
  public mealList:  Meal[];
  public onSelectedMeal: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterCalories: string = "all";

  constructor() {
    this.onSelectedMeal = new EventEmitter();
  }
  createMeal(name: string, details: string, calories: number) {
    this.mealList.push(
      new Meal(name, details, calories)
    );
  }
  editMeal(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onSelectedMeal.emit(clickedMeal);
  }
  onChange(filterOption) {
    this.filterCalories = filterOption;
  }

}
