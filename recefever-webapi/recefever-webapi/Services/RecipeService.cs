using recefever_webapi.Models;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace recefever_webapi.Services;

public class RecipeService
{
    private readonly IMongoCollection<Recipe> _recipeCollection;

    public RecipeService(
        IOptions<RecipeDatabaseSettings> recipeDatabaseSettings)
    {
        var mongoClient = new MongoClient(
            recipeDatabaseSettings.Value.ConnectionString);

        var mongoDatabase = mongoClient.GetDatabase(
            recipeDatabaseSettings.Value.DatabaseName);

        _recipeCollection = mongoDatabase.GetCollection<Recipe>(
            recipeDatabaseSettings.Value.RecipeCollectionName);
    }

    public async Task<List<Recipe>> GetAsync() =>
        await _recipeCollection.Find(_ => true).ToListAsync();

    public async Task<Recipe?> GetAsync(string id) =>
        await _recipeCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

    public async Task CreateAsync(Recipe newRecipe) =>
        await _recipeCollection.InsertOneAsync(newRecipe);

    public async Task UpdateAsync(string id, Recipe updatedRecipe) =>
        await _recipeCollection.ReplaceOneAsync(x => x.Id == id, updatedRecipe);

    public async Task RemoveAsync(string id) =>
        await _recipeCollection.DeleteOneAsync(x => x.Id == id);
}