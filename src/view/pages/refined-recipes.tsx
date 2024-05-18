import RecipeSearch from "../components/recipes/recipe-search";
import { MOCK_CAKE_LAYERS } from "../../mocks/cake-layer.model.mocks";
import { MOCK_CAKE_TOPPING_FILLING } from "../../mocks/cake-topping-filling.model.mocks";
import CategoryFilter from "../components/recipes/category-filter";
import FlavorFilter from "../components/recipes/flavor-filter";

export function RefinedRecipes(){
    return(
    <div> 
        <h1>Refined Recipes</h1>
        <RecipeSearch/>
        <FlavorFilter/>
        <CategoryFilter/>
        <h2>Recipe Overview</h2>
    </div>
    );
}
export default RefinedRecipes;