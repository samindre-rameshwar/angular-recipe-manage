import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.modal';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  subscription: Subscription;
  constructor(private recipeService: RecipeService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipeChanged.subscribe(
      (newRecipe: Recipe[]) => {
        this.recipes = newRecipe;
      }
    )
    this.recipes = this.recipeService.getRecipe();
  }

  onNewRecipe() {
    this._router.navigate(['new'], { relativeTo: this._route });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
