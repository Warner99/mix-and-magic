import { CakeToppingFilling, CakeType } from "../model/cake-topping-filling.model";
import { MOCK_RECIPES } from "./recipe.model.mocks";

export const MOCK_CAKE_TOPPING_FILLING: CakeToppingFilling[] = [
    {
        name: 'Vanilla Buttercream',
        type: [CakeType.coating, CakeType.topping],
        category: 'Buttercream',
        recipe: MOCK_RECIPES[1],
        fondantCompatible: true
    },{
        name: 'Rasberry Sauce',
        type: [CakeType.filling],
        category: 'Sauce',
        recipe: MOCK_RECIPES[2]
    }
];