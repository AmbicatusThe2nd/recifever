using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.Text.Json.Serialization;

namespace recefever_webapi.Models
{
    public class Recipe
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? title { get; set; }
        public string userID { get; set; } = null!;
        public double preperationTime { get; set; }
        public double cookingTime { get; set; }
        public double calories { get; set; }
        public int difficulty { get; set; }
        [JsonConverter(typeof(JsonStringEnumConverter))]
        [BsonRepresentation(BsonType.String)]
        public DailyMeal dailyMeal { get; set; }
        public string[] photos { get; set; } = null!;
        public IngredientModel[] ingredients { get; set; } = null!;
        public string[] steps { get; set; } = null!;
    }
}
