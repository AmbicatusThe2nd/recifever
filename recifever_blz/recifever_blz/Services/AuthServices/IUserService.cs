using recifever_blz.Models;
using System.Net;

namespace recifever_blz.Services.AuthServices
{
    public interface IUserService
    {
        Task<IEnumerable<User>> GetAll();
        Task<User> GetUserById(string id);
        Task<HttpStatusCode> CreateUser(RegistrationModel newUser);
    }
}
