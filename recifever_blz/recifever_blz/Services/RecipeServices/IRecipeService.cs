using System.Collections.Generic;
using System.Threading.Tasks;
using recifever_blz.Models;

namespace recifever_blz.Services.RecipeServices
{
    public interface IRecipeService
    {
        Task<IEnumerable<Recipe>> GetAllRecipesAsync();
        Task<Recipe> GetRecipeAsync(string id);
    }
}
