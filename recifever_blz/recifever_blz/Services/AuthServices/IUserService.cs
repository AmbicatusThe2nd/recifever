using recifever_blz.Models;

namespace recifever_blz.Services.AuthServices
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAll();
        Task<User> GetUserById(string id);
        Task<HttpResponseMessage> CreateUser(RegistrationModel newUser);
    }
}
