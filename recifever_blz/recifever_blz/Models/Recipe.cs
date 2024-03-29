﻿namespace recifever_blz.Models
{
    public class Recipe
    {
        public string? Id { get; set; }
        public string Title { get; set; } = null!;
        public string UserId { get; set; } = null!;
        public double PreperationTime { get; set; }
        public double CookingTime { get; set; }
        public double Calories { get; set; }
        public int Difficulty { get; set; }
        public string DailyMeal { get; set; } = null!;
        public string[]? Photos { get; set; }
        public IngredientModel[] Ingredients { get; set; } = null!;
        public string[] Steps { get; set; } = null!;
    }
}
