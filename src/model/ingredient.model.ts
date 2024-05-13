import { Unit } from "./unit";

export interface Ingredient{
    name: string;
    category: string;
    unit: Unit;
    flavor?: string;
    allergens?: string[];
};
