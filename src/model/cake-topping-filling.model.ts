import { CakeComponent } from "./cake-component.model";

export interface CakeToppingFilling extends CakeComponent{
    name: string;
    type: CakeType[];
    consistency?: string;
    fondantCompatible?: boolean;

};

export enum CakeType{
    filling = 'Filling',
    coating = 'Coating',
    topping = 'Topping',
}