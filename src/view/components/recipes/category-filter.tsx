import { Autocomplete, TextField } from "@mui/material";
import { MOCK_CAKE_TOPPING_FILLING } from "../../../mocks/cake-topping-filling.model.mocks";
import { MOCK_CAKE_LAYERS } from "../../../mocks/cake-layer.model.mocks";

export function CategoryFilter(){

    return(
    <div>   
        <Autocomplete 
        sx={{padding:'12px'}}
        options={categories}
        multiple
        getOptionLabel={(option) => option}
        renderInput={(params) => <TextField {...params} label="Category" />}       
/>
    </div>);
}
export default CategoryFilter; 

//load mock data
const layerRecipes = MOCK_CAKE_LAYERS.map((x) => {return x});
const fillingRecipes = MOCK_CAKE_TOPPING_FILLING.map((x) => {return x});

var categories: string[] = [];
layerRecipes.forEach((element) => categories.push(element.category));
fillingRecipes.forEach((element) =>  categories.push(element.category));

