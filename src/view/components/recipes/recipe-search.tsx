import { Autocomplete, TextField } from "@mui/material";
export interface RecipeSearchProps{
    recipes: string[];
}
export function RecipeSearch({recipes}:RecipeSearchProps){
    return(
    <div>   
        <Autocomplete 
            renderInput={(params) => <TextField {...params} label="Recipe" />} 
            options={recipes}/>

    </div>);
}
export default RecipeSearch;