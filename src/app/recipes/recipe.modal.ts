import { Ingredient } from '../shared/ingredients.modal';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients: Ingredient[];

    constructor(_name: string, _desc: string, _imagePath: string,_ingredients:Ingredient[]) {
        this.name = _name;
        this.description = _desc;
        this.imagePath = _imagePath;
        this.ingredients = _ingredients;
    }
}