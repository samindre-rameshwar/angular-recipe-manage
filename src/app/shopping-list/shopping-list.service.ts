import { Ingredient } from '../shared/ingredients.modal';
import { Subject } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

export class ShoppingListService {
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomato', 15),
        new Ingredient('Batato', 25)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredientsById(index:number){
         return this.ingredients[index];
    }

    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addMultiIngredients(ingredients:Ingredient[]){ 
        this.ingredients.push(...ingredients);
        this.ingredientChanged.next(this.ingredients.slice());
    }

    updateIngredient(index:number,newIngredients){
        this.ingredients[index] = newIngredients;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngedient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}