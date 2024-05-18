import RecipeSearch from "../components/recipes/recipe-search";
import { MOCK_CAKE_LAYERS } from "../../mocks/cake-layer.model.mocks";
import { MOCK_CAKE_TOPPING_FILLING } from "../../mocks/cake-topping-filling.model.mocks";

export function RefinedRecipes(){
    return(
    <div> 
        <h1>Refined Recipes</h1>
        <RecipeSearch recipes={recipes}/>
        <h2>Filter</h2>
        <h2>Recipe Overview</h2>
    </div>
    );
}
export default RefinedRecipes;

var recipes: string[] = [];


const layerRecipes = MOCK_CAKE_LAYERS.map((x) => {return x});
const fillingRecipes = MOCK_CAKE_TOPPING_FILLING.map((x) => {return x});

layerRecipes.forEach((element) => recipes.push(element.name));
fillingRecipes.forEach((element) => recipes.push(element.name));
