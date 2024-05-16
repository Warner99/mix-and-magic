import { CakeLayer, Shape } from "../model/cake-layer.model";
import { MOCK_RECIPES } from "./recipe.model.mocks";

export const MOCK_CAKE_LAYERS: CakeLayer[] = [{
    bakingTime: 30,
    bakingTemperature: 180,
    name: 'Hazelnut Cloud Cake',
    category: 'Sponge Cake',
    recipe: MOCK_RECIPES[0],
    shape: Shape.square
}
];