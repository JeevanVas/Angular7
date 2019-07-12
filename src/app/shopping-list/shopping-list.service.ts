import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomatoes', 5),
        new Ingredient('Apples', 5)
      ];    

    getIngredients() {
        return this.ingredients.slice(); //slice() is used to return the copy of 'recipes' array. Hence we can't access the array directly from outside.
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /*for(let ingredient of ingredients) {
            this.addIngredient(ingredient);
        } */
        // The above approach can also be used. The events emits multiple times in 'addIngredient' function
        // Hence we use below method

        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
        // We use ES6 feature spread operator(...) to turn the array of elements to list of elements.
        // Because the push method here is not able to handle array
    }
}