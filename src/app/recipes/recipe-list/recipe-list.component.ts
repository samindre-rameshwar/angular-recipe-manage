import { Component, OnInit, Output,EventEmitter  } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("A Test Recipe 1", "Testing Recipe 1", "https://as1.ftcdn.net/jpg/01/98/69/96/500_F_198699667_BYTTe20s1ZVeKrlHKCx109Ee53IgxLEz.jpg"),
    new Recipe("A Test Recipe 2", "Testing Recipe 2", "https://as1.ftcdn.net/jpg/01/98/69/96/500_F_198699667_BYTTe20s1ZVeKrlHKCx109Ee53IgxLEz.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
