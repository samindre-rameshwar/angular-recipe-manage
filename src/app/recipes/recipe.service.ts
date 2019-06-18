import { Recipe } from './recipe.modal';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Burger Cheese", "Super tasty burger!", "https://as1.ftcdn.net/jpg/01/98/69/96/500_F_198699667_BYTTe20s1ZVeKrlHKCx109Ee53IgxLEz.jpg",[
            new Ingredient('Meat',21),
            new Ingredient('French Fries',55)
        ]),
        new Recipe("Biryani", "What else you want?",
         "https://www.gstatic.com/webp/gallery/5.webp",[
            new Ingredient('Buns',2),
            new Ingredient('Biryani',25),
         ])
    ];

    constructor(private slService:ShoppingListService){

    } 

    getRecipe() {
        return this.recipes.slice();
    }

    addIngredientsToShopingList(ingredients:Ingredient[]){
        this.slService.addMultiIngredients(ingredients);
    }


}