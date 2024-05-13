import { Ingredient } from "./ingredient.model";

export interface Recipe{
    ingredients: Map<Ingredient, number>; //Ingredient and corresponding amount
    instructions: string[];
    source?: string;
    baseMeasurement?: number;
    baseUnit?: string;
};