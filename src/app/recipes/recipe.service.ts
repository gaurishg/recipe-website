import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg'),
        new Recipe('Another Test Recipe', 'This is another test recipe', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg')
      ];
 
    getRecipe() {
        return this.recipes.slice();
    }
}