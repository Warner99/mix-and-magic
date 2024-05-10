import RecipeSearch from "../components/recipes/recipe-search";

export function RefinedRecipes(){
    return(
    <div> 
        <h1>Refined Recipes</h1>
        <h2>Search Bar - Autocomplete</h2>
        <RecipeSearch/>
        <h2>Filter</h2>
        <h2>Recipe Overview</h2>
    </div>
    );
}
export default RefinedRecipes;