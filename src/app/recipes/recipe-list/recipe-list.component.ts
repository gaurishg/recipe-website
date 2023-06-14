import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test recipe', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg'),
    new Recipe('Another Test Recipe', 'This is another test recipe', 'https://cdn.pixabay.com/photo/2015/08/25/03/50/herbs-906140_1280.jpg')
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();
}
