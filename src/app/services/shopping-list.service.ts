import { Injectable, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  @Output() ingredientChangedEmitter = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('lemons', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChangedEmitter.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //Push an array to another array
    this.ingredients.push(...ingredients);
    this.ingredientChangedEmitter.emit(this.ingredients.slice());
  }

}
