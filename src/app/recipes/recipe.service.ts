import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()  // It is used when some other service is been used here (Eg: ShoppingListService)

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'Testing purpose', 
            'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
            ),
        new Recipe(
            'A Test Recipe 2', 
            'Testing purpose', 
            'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Buns', 2)                
            ]
            )
      ];   

      constructor(private slService: ShoppingListService) {}
      
    getRecipes() {
        return this.recipes.slice(); //slice() is used to return the copy of 'recipes' array. Hence we can't access the array directly from outside.
    }    

    addingIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
}