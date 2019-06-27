import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.modal';

@Injectable()
export class DataStorageService {
    constructor(private _http: HttpClient,private _recipeService:RecipeService) {

    }

    storeRecipes(){
       return this._http.put('https://ng-recipe-book-ea2fe.firebaseio.com/recipes.json',this._recipeService.getRecipe())
    }

    getRecipes(){
        return this._http.get('https://ng-recipe-book-ea2fe.firebaseio.com/recipes.json')
        .subscribe(
            (recipe:Recipe[])=>{
                const recipes:any = recipe;
                this._recipeService.setRecipes(recipes);
            }
        )
     }
}