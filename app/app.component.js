System.register(['angular2/core', './meal.model', './meal-list.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, meal_model_1, meal_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (meal_model_1_1) {
                meal_model_1 = meal_model_1_1;
            },
            function (meal_list_component_1_1) {
                meal_list_component_1 = meal_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.meals = [
                        new meal_model_1.Meal(8 / 10 / 16, "Bagel", "Cinnamon-raisin bagel with butter for breakfast", 500),
                        new meal_model_1.Meal(8 / 10 / 16, "Kale Salad", "Kale salad with cranberries and sunflower seeds for lunch", 200),
                        new meal_model_1.Meal(8 / 10 / 16, "Chicken Garlic Pizza", "3 slices of pizza", 1000),
                        new meal_model_1.Meal(8 / 11 / 16, "Bagel", "Cinnamon-raisin bagel with butter for breakfast", 500),
                        new meal_model_1.Meal(8 / 11 / 16, "Mocha", "Grande mocha for Starbucks", 400),
                        new meal_model_1.Meal(8 / 11 / 16, "Kale Salad", "Kale salad with cranberries and sunflower seeds for lunch", 200),
                        new meal_model_1.Meal(8 / 11 / 16, "Hummus", "1/2 cup for lunch", 200),
                        new meal_model_1.Meal(8 / 11 / 16, "MultiGrain Chips", "Food is good chips...nomnom for lunch", 150),
                        new meal_model_1.Meal(8 / 11 / 16, "Salmon", "1 patty for dinner", 150),
                        new meal_model_1.Meal(8 / 11 / 16, "Fettuccine", "2 cups of pasta with sauce for dinner", 900),
                    ];
                    console.log("Meals created");
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [meal_list_component_1.MealListComponent],
                        template: "\n    <div class=\"container\">\n      <h1>Meal Tracker</h1>\n      <meal-list [mealList]=\"meals\"></meal-list>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map