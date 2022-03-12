namespace recifever_blz.Models
{
    public class User
    {
        public string? Id { get; set; }
        public string? firstName { get; set; }
        public string? lastName { get; set; }
        public string? email { get; set; }
        public string? password { get; set; }
        public string? birthDate { get; set; }
        public string? salt { get; set; }
    }
}
}
