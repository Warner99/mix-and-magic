import RecipeSearch from "../components/recipes/recipe-search";
import CategoryFilter from "../components/recipes/category-filter";
import FlavorFilter from "../components/recipes/flavor-filter";

export function RefinedRecipes(){
    return(
    <div> 
        {/* https://stackoverflow.com/questions/75818761/material-ui-autocomplete-warning-a-props-object-containing-a-key-prop-is-be */}
        <h1>Refined Recipes</h1>
        <RecipeSearch/>
        <FlavorFilter/>
        <CategoryFilter/>
        <h2>Recipe Overview</h2>
    </div>
    );
}
export default RefinedRecipes;