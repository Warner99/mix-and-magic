import { CakeTier } from "./cake-tier.model";

export interface Cake{
    name: string;
    tiers: CakeTier[];
}