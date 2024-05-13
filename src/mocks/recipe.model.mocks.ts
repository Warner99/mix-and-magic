import { Ingredient } from "../model/ingredient.model";
import { Recipe } from "../model/recipe.model";
import { MOCK_INGREDIENTS } from "./ingredient.model.mocks";


export const MOCK_RECIPES: Recipe[]= [
    {
        name: "Hazelnut Cloud Cake",
        ingredients: new Map<Ingredient,number>([
            [MOCK_INGREDIENTS[0], 300],
            [MOCK_INGREDIENTS[5], 200],
            [MOCK_INGREDIENTS[3], 10],
        ]),
        instructions: ['abc', 'cde','efg']
    },{
        name: "Vanilla Buttercream",
        ingredients: new Map<Ingredient,number>([
            [MOCK_INGREDIENTS[7], 2],
            [MOCK_INGREDIENTS[6], 300],
            [MOCK_INGREDIENTS[5], 100],
            [MOCK_INGREDIENTS[4], 50],
        ]),
        instructions: ['aaa', 'bbb','ccc']
    },{
        name: "Rasberry Sauce",
        ingredients: new Map<Ingredient,number>([
            [MOCK_INGREDIENTS[2], 600],
            [MOCK_INGREDIENTS[5], 300],
        ]),
        instructions: ['123', '456','789']
    },

]