import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipeSelectedEmitter = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Mexican chicken burger',
      'A burger with spiced chipotle chicken breast',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2016/10/mexican-chicken-burger.jpg?itok=_AGDavEw',
      [
        new Ingredient('chicken breast', 1),
        new Ingredient('tsp chipotle paste', 1),
        new Ingredient('lime, juiced', 1),
        new Ingredient('slices cheese', 1),
        new Ingredient('brioche bun', 1),
        new Ingredient('avocado', 1)
      ]),
    new Recipe('Chicken satay salad',
      'High in protein and big on flavour',
      // tslint:disable-next-line:max-line-length
      'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/chicken-satay-salad.jpg?itok=AxyLnTOs',
      [
        new Ingredient('tbsp tamari', 1),
        new Ingredient('tsp medium curry powder', 1),
        new Ingredient('garlic clove, finely grated', 1),
        new Ingredient('tsp clear honey', 1),
        new Ingredient('skinless chicken breast fillets', 2),
        new Ingredient('tbsp crunchy peanut butter', 1)
      ])
  ];

  constructor() { }

  getRecipes() {
    //Return a copy of the recipes object
    return this.recipes.slice();
  }

}
