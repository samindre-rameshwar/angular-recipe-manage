import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipeService : RecipeService,private _router : Router,private _route:ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipe();
  }

  onNewRecipe(){
    this._router.navigate(['new'],{relativeTo:this._route});
  }

}
