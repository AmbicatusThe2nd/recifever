using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace recefever_webapi.Models
{
    public class Recipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? Title { get; set; }
        public string userID { get; set; } = null!;
        public double preperationTime { get; set; }
        public double cookingTime { get; set; }
        public int difficulty { get; set; }
        public DailyMeal dailyMeal { get; set; }
        public string[] photos { get; set; } = null!;
        public IngredientModel[] ingredients { get; set; } = null!;
        public string[] steps { get; set; } = null!;
    }
}
