import { Recipe } from './recipe.modal';
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("A Test Recipe 1", "Testing Recipe 1", "https://as1.ftcdn.net/jpg/01/98/69/96/500_F_198699667_BYTTe20s1ZVeKrlHKCx109Ee53IgxLEz.jpg"),
        new Recipe("A Test Recipe 2", "Testing Recipe 2", "https://www.gstatic.com/webp/gallery/5.webp")
    ];

    getRecipe() {
        return this.recipes.slice();
    }


}