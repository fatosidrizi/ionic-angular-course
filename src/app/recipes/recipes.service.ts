import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    private recipes: Recipe[] = [
        {
            id: 'r1',
            title: 'Schnitzel',
            imageUrl: 'https://bit.ly/2yolTUI',
            ingredients: ['French Fries', 'Meat', 'Salad'],
        },
        {
            id: 'r1',
            title: 'Spaghetti',
            imageUrl: 'https://bit.ly/3aihtvJ',
            ingredients: ['Spaghetti', 'Meat', 'Tomatoes'],
        }
    ];

    constructor() {
    }

    getAllRecipes() {
        return [...this.recipes];
    }

    getRecipe(recipeId: string) {
        return {
            ...this.recipes.find(recipe => {
                return recipe.id === recipeId;
            })
        };
    }
}
