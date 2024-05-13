import { Recipe } from "./recipe.model";

//this interface should only be used as a source for inheritance
export interface CakeComponent{
    name: string;
    category: string;
    recipe: Recipe;

}