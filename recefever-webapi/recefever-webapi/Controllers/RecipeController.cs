using Microsoft.AspNetCore.Mvc;
using recefever_webapi.Services;
using recefever_webapi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using System.Net.Http.Headers;

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

        [HttpPost("~/upload"), DisableRequestSizeLimit]
        [ApiExplorerSettings(IgnoreApi = true)]
        public IActionResult Upload()
        {
            try
            {
                IFormFileCollection files = Request.Form.Files;
                string folderName = Path.Combine("Resources", "Images");
                string pathToSave = Path.Combine(Directory.GetCurrentDirectory(), folderName);

                if (files.Count == 0)
                {
                    return BadRequest("There aren't any files in the requst");
                }

                foreach(IFormFile file in files)
                {
                    string fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
                    string fullPath = Path.Combine(pathToSave, fileName);
                    // var dbPath = Path.Combine(folderName, fileName);

                    using(var stream = new FileStream(fullPath, FileMode.Create))
                    {
                        file.CopyTo(stream);
                    }
                }

                return Ok("Files have been uploaded");

            }
            catch (Exception ex)
            {
                return BadRequest("There has been an error: " + ex.Message);
            }
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
