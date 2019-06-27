import { Recipe } from './recipe.modal';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()

export class RecipeService {
    recipeChanged = new Subject<Recipe[]>();
    private recipes: Recipe[] = [
        new Recipe("Burger Cheese", "Super tasty burger!", "https://as1.ftcdn.net/jpg/01/98/69/96/500_F_198699667_BYTTe20s1ZVeKrlHKCx109Ee53IgxLEz.jpg", [
            new Ingredient('Meat', 21),
            new Ingredient('French Fries', 55)
        ]),
        new Recipe("Biryani", "What else you want?",
            "https://www.gstatic.com/webp/gallery/5.webp", [
                new Ingredient('Buns', 2),
                new Ingredient('Biryani', 25),
            ])
    ];

    constructor(private slService: ShoppingListService) {

    }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipeById(index: number) {
        return this.recipes.slice()[index];
    }

    addIngredientsToShopingList(ingredients: Ingredient[]) {
        this.slService.addMultiIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.getRecipe());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.getRecipe());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.getRecipe());
    }


}