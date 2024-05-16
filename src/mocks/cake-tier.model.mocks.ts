import { CakeTier } from "../model/cake-tier.model";
import { MOCK_CAKE_LAYERS } from "./cake-layer.model.mocks";
import { MOCK_CAKE_TOPPING_FILLING } from "./cake-topping-filling.model.mocks";

export const MOCK_CAKE_TIER: CakeTier[] = [
    {
        layers: [MOCK_CAKE_LAYERS[0]],
        fillings: [ MOCK_CAKE_TOPPING_FILLING[1]],
        coatings: [ MOCK_CAKE_TOPPING_FILLING[0]],
        toppings: []
    }
]