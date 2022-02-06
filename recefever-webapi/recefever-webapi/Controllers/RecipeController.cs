using Microsoft.AspNetCore.Mvc;
using recefever_webapi.Services;
using recefever_webapi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recefever_webapi.Controllers
{
    [EnableCors]
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {

        private readonly RecipeService _recipeService;

        public RecipeController(RecipeService recipeService) => 
            _recipeService = recipeService;


        // GET: api/<RecipeController>
        [HttpGet]
        public async Task<List<Recipe>> Get() => 
            await _recipeService.GetAsync();

        // GET api/<RecipeController>/5
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Recipe>> Get(string id)
        {
            var recipe = await _recipeService.GetAsync(id);
            if (recipe == null)
            {
                return NotFound();
            }

            return Ok(recipe);
        }

        // POST api/<RecipeController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Recipe newRecipe)
        {
            await _recipeService.CreateAsync(newRecipe);

            return Ok(newRecipe);
        }

        // PUT api/<RecipeController>/5
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Put(string id, [FromBody] Recipe value)
        {
            var recipe = await _recipeService.GetAsync(id);

            if (recipe == null)
            {
                return NotFound();
            }

            recipe.Id = value.Id;

            await _recipeService.UpdateAsync(id, value);

            return Ok(recipe);
        }

        // DELETE api/<RecipeController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(string id)
        {
            var recipe = _recipeService.GetAsync(id);

            if(recipe == null) { return NotFound(); }

            await _recipeService.RemoveAsync(id);

            return Ok();
        }
    }
}
