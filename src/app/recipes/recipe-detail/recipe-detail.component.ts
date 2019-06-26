import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  id:number;
  constructor(private recipeService:RecipeService,private route:ActivatedRoute,private _router:Router) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipeById(this.id);
      }
    )
  }

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShopingList(this.recipe.ingredients)
  }

  onEditRecipe(){
    this._router.navigate(['edit'],{relativeTo:this.route}); 
    // this._router.navigate(['../',this.id,'edit'],{relativeTo:this.route}); 
  }
  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this._router.navigate(['/recipes']);
  }

}
