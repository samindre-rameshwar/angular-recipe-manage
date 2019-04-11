import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 15),
    new Ingredient('Batato', 25)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    if (ingredient) {
      this.ingredients.push(ingredient);
    }
  }

}
