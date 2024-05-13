import { Ingredient } from "../model/ingredient.model";
import { Unit } from "../model/unit";

export const MOCK_INGREDIENTS: Ingredient[]= [
    { //0 (index)
        name: 'ground hazelnut',
        flavor: 'hazelnut',
        category: 'nuts',
        unit: Unit.gram,
    },
    { //1
        name: 'flour',
        category: 'grains',
        unit: Unit.gram
    },
    { //2
        name: 'raspberry',
        flavor: 'raspberry',
        category: 'berries',
        unit: Unit.gram
    },
    { //3
        name: 'chicken egg',
        category: 'egg',
        unit: Unit.piece
    },
    { //4
        name: 'milk',
        category: 'dairy',
        unit: Unit.piece
    },
    { //5
        name: 'brown sugar',
        category: 'sugar',
        unit: Unit.piece
    },{ //6
        name: 'butter',
        category: 'dairy',
        unit: Unit.gram
    },{ //7
        name: 'vanilla extract',
        category: 'spices',
        unit: Unit.gram
    }
]