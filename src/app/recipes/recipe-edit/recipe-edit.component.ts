import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.modal';

@Component({
	selector: 'app-recipe-edit',
	templateUrl: './recipe-edit.component.html',
	styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
	id: number;
	editMode: boolean = false;
	recipeForm:FormGroup;
	constructor(private _route: ActivatedRoute,private _recipeService:RecipeService,private _router:Router) { }

	ngOnInit() {
		this._route.params.subscribe(
			(params: Params) => {
				this.id = +params['id'];
				this.editMode = params['id'] != null;
				this.initForm()
			}
		)
	}

	onSubmit(){
		let name = this.recipeForm.value['name'];
		let description = this.recipeForm.value['description'];
		let imagePath = this.recipeForm.value['imagePath'];
		let ingredients = this.recipeForm.value['ingredients'];
		const newRecipe = new Recipe(name,description,imagePath,ingredients);
		if(this.editMode){
			this._recipeService.updateRecipe(this.id,newRecipe)
		}else{
			this._recipeService.addRecipe(newRecipe);
		}
		this.onCancel();
	}

	private initForm(){
		let recipeName = "";
		let recipeImagePath = "";
		let recipeDescription = "";
		let recipeIngredients = new FormArray([]);
		if(this.editMode){
			const recipe = this._recipeService.getRecipeById(this.id)
			recipeName = recipe.name;
			recipeImagePath = recipe.imagePath;
			recipeDescription = recipe.description;
			if(recipe['ingredients']){
				for(let ing of recipe.ingredients){
					recipeIngredients.push(
						new FormGroup({
							'name':new FormControl(ing.name,Validators.required ),
							'amount':new FormControl(ing.amount,[
								Validators.required ,
								Validators.pattern(/^[1-9]+[0-9]*$/)
							])
						})
					)
				}
			}
		}

		this.recipeForm = new FormGroup({
			'name':new FormControl(recipeName,Validators.required),
			'imagePath' : new FormControl(recipeImagePath,Validators.required ),
			'description' : new FormControl(recipeDescription,Validators.required),
			'ingredients': recipeIngredients
		}) 
	}

	onAddIngredients(){
		(<FormArray>this.recipeForm.get('ingredients')).push(
			new FormGroup({
				'name': new FormControl(null,Validators.required),
				'amount': new FormControl(null,[
					Validators.required ,
					Validators.pattern(/^[1-9]+[0-9]*$/)
				])
			})
		)
	}

	onCancel(){
		this._router.navigate(['../'],{relativeTo:this._route});
	}

	onDeleteIng(index:number){
		(<FormArray>this.recipeForm.get('ingredients')).removeAt(index); 
	}

}
