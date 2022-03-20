using recifever_blz.Models;
using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;

namespace recifever_blz.Services.RecipeServices
{
    public class RecipeService : IRecipeService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;

        public RecipeService(HttpClient httpClient, IConfiguration configuration)
        {
            this._httpClient = httpClient;
            this._configuration = configuration;
        }

        public async Task<IEnumerable<Recipe>> GetAllRecipesAsync()
        {
            return await _httpClient.GetFromJsonAsync<IEnumerable<Recipe>>(_configuration["APIs:recifeverAPIUrl"] + "/api/Recipe");
        }
    }
}
