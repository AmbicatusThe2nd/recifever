namespace recefever_webapi.Models
{
    public class Recipe
    {
        public string? Id { get; set; }
        public string? Title { get; set; }
        public string? userID { get; set; }
        public double preperationTime { get; set; }
        public double cookingTime { get; set; }
        public int difficulty { get; set; }
        public DailyMeal dailyMeal { get; set; }
        public string[]? photos { get; set; }
        public IngredientModel[]? ingredients { get; set; }
        public string[]? steps { get; set; }
    }
}
