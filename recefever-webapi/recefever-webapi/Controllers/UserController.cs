using Microsoft.AspNetCore.Mvc;
using recefever_webapi.Models;
using recefever_webapi.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace recefever_webapi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;

        public UserController(UserService booksService) =>
            _userService = booksService;

        // GET: api/<UserController>
        [HttpGet]
        public async Task<ActionResult<List<User>>> Get() =>
            await _userService.GetAsync();

        

        // GET api/<UserController>/5
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<User>> Get(string id)
        {
            var user = await _userService.GetAsync(id);
            if (user == null) { return NotFound(); }
            return Ok(user);
        }

        

        // POST api/<UserController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] User newUser)
        {
            newUser = _userService.HashPassword(newUser);
            await _userService.CreateAsync(newUser);
            return CreatedAtAction(nameof(Get), new { id = newUser.Id }, newUser);
        }

        // POST api/<UserController>/Login
        [HttpPost("~/login")]
        public async Task<ActionResult<User>> Get([FromBody] LoginModel user)
        {
            var claimedUser = await _userService.GetByEmailAsync(user.email);
            if (claimedUser == null) { return NotFound(); }
            if (!_userService.VerifyPassword(user.password, claimedUser.password, claimedUser.salt)) { return NotFound(); }

            return Ok(claimedUser);
        }

        // PUT api/<UserController>/5
        [HttpPut("{id:length(24)}")]
        public async Task<IActionResult> Put(string id, [FromBody] User updatedUser)
        {
            var user = await _userService.GetAsync(id);

            if(user == null) { return NotFound(); }

            updatedUser.Id = user.Id;

            await _userService.UpdateAsync(id, updatedUser);

            return Ok(updatedUser);
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id:length(24)}")]
        public async Task<IActionResult> Delete(string id)
        {
            var user = await _userService.GetAsync(id);

            if (user == null) { return NotFound(); }

            await _userService.RemoveAsync(id);

            return Ok();
        }
    }
}
