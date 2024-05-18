import { Autocomplete, TextField } from "@mui/material";
import { MOCK_CAKE_TOPPING_FILLING } from "../../../mocks/cake-topping-filling.model.mocks";
import { MOCK_CAKE_LAYERS } from "../../../mocks/cake-layer.model.mocks";
import { Recipe } from "../../../model/recipe.model";
import { Ingredient } from "../../../model/ingredient.model";

export function FlavorFilter(){

    return(
    <div>   
        <Autocomplete
        sx={{padding:'12px'}}
        options={flavors}
        multiple
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} label="Flavors" />}       
        />
    </div>);
}
export default FlavorFilter; 

//load mock data
const layerRecipes = MOCK_CAKE_LAYERS.map((x) => {return x.recipe});
const fillingRecipes = MOCK_CAKE_TOPPING_FILLING.map((x) => {return x.recipe});
var recipes: Recipe[] = [];
layerRecipes.forEach((element) => recipes.push(element));
fillingRecipes.forEach((element) => recipes.push(element));
var flavors: string[] = [];
for(let i=0; i<recipes.length;i++){
   for(let key of recipes[i].ingredients.keys()){
        if(key.flavor !== undefined && flavors.includes(key.flavor) === false){
             flavors.push(key.flavor);
        }
       
    } 
}