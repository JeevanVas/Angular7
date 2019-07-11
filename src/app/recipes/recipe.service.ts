import { Recipe } from './recipe.model';

import { EventEmitter } from '@angular/core';

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Testing purpose', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg'),
        new Recipe('A Test Recipe 2', 'Testing purpose', 'https://www.gimmesomeoven.com/wp-content/uploads/2014/03/Cajun-Jambalaya-Recipe-with-Andouille-Sausage-Shrimp-and-Chicken-32.jpg')
      ];   
      
    getRecipes() {
        return this.recipes.slice(); //slice() is used to return the copy of 'recipes' array. Hence we can't access the array directly from outside.
    }    
}