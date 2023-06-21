import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

@Injectable()
export class ShoppingListService {
    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 10),
        new Ingredient("Mango", 20)
      ]
    
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ing: Ingredient) {
        this.ingredients.push(ing);
        // this.ingredients = this.ingredients.slice();
    }
}