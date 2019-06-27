import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.modal';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
    constructor(private _http: HttpClient,
        private _recipeService:RecipeService,private authService:AuthService) {}
 
    storeRecipes(){
        const token = this.authService.getToken();
       return this._http.put('https://ng-recipe-book-ea2fe.firebaseio.com/recipes.json?auth='+token,this._recipeService.getRecipe())
    }

    getRecipes(){
        const token = this.authService.getToken();
        return this._http.get('https://ng-recipe-book-ea2fe.firebaseio.com/recipes.json?auth='+token)
        .subscribe(
            (recipe:Recipe[])=>{
                const recipes:any = recipe;
                this._recipeService.setRecipes(recipes);
            }
        )
     }
}