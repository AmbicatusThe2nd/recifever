using System.ComponentModel.DataAnnotations;


namespace recifever_blz.Models
{
    public class RegistrationModel
    {
        [Required(ErrorMessage = "This field is required")]
        [Display(Name = "Firstname")]
        public string? firstName { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public string? lastName { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        [Display(Name = "Email")]
        public string? email { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [DataType(DataType.Password)]
        public string? password { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [DataType(DataType.Password)]
        [Compare("password", ErrorMessage = "The passwords do not match")]
        public string? passworRepeat { get; set; }
        [Required(ErrorMessage = "This field is required")]
        public DateOnly? birthDate { get; set; }
    }
}
