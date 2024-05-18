import { Autocomplete, TextField } from "@mui/material";
import { MOCK_CAKE_LAYERS } from "../../../mocks/cake-layer.model.mocks";
import { MOCK_CAKE_TOPPING_FILLING } from "../../../mocks/cake-topping-filling.model.mocks";
export function RecipeSearch(){
    return(
    <div>   
        <Autocomplete 
        sx={{padding:'12px'}}
            renderInput={(params) => <TextField {...params} label="Recipe" />} 
            options={recipes}/>
    </div>);
}
export default RecipeSearch;
//load mock data
const layerRecipes = MOCK_CAKE_LAYERS.map((x) => {return x});
const fillingRecipes = MOCK_CAKE_TOPPING_FILLING.map((x) => {return x});
var recipes: string[] = [];
layerRecipes.forEach((element) => recipes.push(element.name));
fillingRecipes.forEach((element) => recipes.push(element.name));