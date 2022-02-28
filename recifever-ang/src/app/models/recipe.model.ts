import { IngredientModel } from "./ingredient.model"

export class Recipe {
    public Id?: string | undefined
    public title: string | undefined
    public userID: string | undefined
    public preperationTime: number | undefined
    public cookingTime: number | undefined
    public calories: number | undefined
    public difficulty: number | undefined
    public dailyMeal: number | undefined
    public photos?: string[] | undefined
    public ingredients: IngredientModel[] | undefined
    public steps: string[] | undefined
}