using recifever_blz.Models;
using System.Net;
using System.Net.Http.Json;

namespace recifever_blz.Services.AuthServices
{
    public class UserService : IUserService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public UserService(HttpClient httpClient, IConfiguration configuration)
        {
            this._httpClient = httpClient;
            this._configuration = configuration;
        }

        public async Task<HttpStatusCode> CreateUser(RegistrationModel newUser)
        {
            HttpResponseMessage response = await _httpClient.PostAsJsonAsync(_configuration["APIs:recifeverAPIUrl"] + "/api/User/"
                , newUser);
            return response.StatusCode;
        }

        public async Task<IEnumerable<User>> GetAll() // This might get deleted or implemented later
        {
            return await _httpClient.GetFromJsonAsync<IEnumerable<User>>(_configuration["APIs:recifeverAPIUrl"] + "/api/User/" );
        }

        public async Task<User> GetUserById(string id)
        {
            return await _httpClient.GetFromJsonAsync<User>(_configuration["APIs:recifeverAPIUrl"] + "/api/User/" + id);
        }
    }
}
