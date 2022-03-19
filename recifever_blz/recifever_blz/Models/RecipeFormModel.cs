using System.ComponentModel.DataAnnotations;

namespace recifever_blz.Models
{
    public class RecipeFormModel
    {
        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Title")]
        public string Title { get; set; } = null!;
        [Required(ErrorMessage = "This field is required")]
        [Range(0.0, Double.MaxValue, ErrorMessage = "The field {0} must be greater than {1}.")]
        [Display(Name = "Title")]
        public double PreperationTime { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Range(0.0, Double.MaxValue, ErrorMessage = "The field {0} must be greater than {1}.")]
        [Display(Name = "Title")]
        public double Calories { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Title")]
        [Range(1, 5, ErrorMessage = "Please stay in range 1-5")]
        public int Difficulty { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Title")]
        [Range(1, 5, ErrorMessage = "Please stay in range 1-5")]
        public int DailyMeal { get; set; }

        // public string[]? Photos { get; set; } This will be implemented later
        public List<IngredientModel> Ingredients { get; set; } = null!;
        public List<string> Steps { get; set; } = null!;
    }
}
