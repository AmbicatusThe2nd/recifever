using System.ComponentModel.DataAnnotations;

namespace recifever_blz.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage = "This field is required")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress]
        [Display(Name = "Email")]
        public string? email { get; set; }
        [Required(ErrorMessage = "This field is required")]
        [DataType(DataType.Password)]
        [Display(Name = "Password")]
        public string? password { get; set; }
    }
}
