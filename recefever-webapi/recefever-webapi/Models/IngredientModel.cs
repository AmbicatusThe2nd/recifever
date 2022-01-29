namespace recefever_webapi.Models
{
    public class IngredientModel
    {
        public string? ingredient { get; set; }
        public double amount { get; set; }
        public IngredientAmount measurment { get; set; }
    }
}
