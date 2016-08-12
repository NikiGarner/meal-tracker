import {Pipe, PipeTransform} from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "lowCalories",
  pure: false
})
export class LowCaloriesPipe implements PipeTransform {
  transform(input: Meal[], info) {
    var calorieAmount = info[0];
    if (calorieAmount === "lowCalories") {
      return input.filter(function(meal) {
        return meal.calories <= 500;
      });
    } else if (calorieAmount === "highCalories") {
      return input.filter(function(meal) {
        return meal.calories > 500;
      });
    } else {
      return input;
    }
  }
}
