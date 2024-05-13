import { CakeComponent } from "./cake-component.model";

export interface CakeLayer extends CakeComponent{
    shape: Shape;
    bakingTime: number; //minutes
    bakingTemperature: number; // °Celsius

}

export enum Shape{
    square = 'Square',
    circle = 'Circle',
}