import { CakeLayer } from "./cake-layer.model";
import { CakeToppingFilling } from "./cake-topping-filling.model";

export interface CakeTier{
    layers: CakeLayer[];
    fillings?: CakeToppingFilling[]; //All Components, that have been specifically selected for this tier to be fillings
    coatings?: CakeToppingFilling[]; //All Components, that have been specifically selected for this tier to be coatings
    toppings?: CakeToppingFilling[]; //All Components, that have been specifically selected for this tier to be toppings
}