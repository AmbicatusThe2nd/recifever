using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using Newtonsoft.Json.Converters;
using System.Text.Json.Serialization;

namespace recefever_webapi.Models
{
    public class IngredientModel
    {
        public string? ingredient { get; set; }
        public double amount { get; set; }
        public string? measurement { get; set; }
    }
}
