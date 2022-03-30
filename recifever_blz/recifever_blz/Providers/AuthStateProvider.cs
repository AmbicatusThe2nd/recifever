using Microsoft.AspNetCore.Components.Authorization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Blazored.LocalStorage;

namespace recifever_blz.Providers
{
    public class AuthStateProvider : AuthenticationStateProvider
    {
        private readonly ILocalStorageService _localStorageService;

        public AuthStateProvider(ILocalStorageService localStorageService)
        {
            _localStorageService = localStorageService;
        }

        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            string tokenAuth = await GetToken();
            if (string.IsNullOrEmpty(tokenAuth))
            {
                return new AuthenticationState(new ClaimsPrincipal(new ClaimsIdentity()));
            }

            JwtSecurityToken token = DecodeToken(tokenAuth);

            ClaimsIdentity identity = new ClaimsIdentity(new List<Claim>
            {
                new Claim(ClaimTypes.Name, token.Claims.First(x => x.Type == "userName").Value),
                new Claim(ClaimTypes.NameIdentifier, token.Claims.First(y => y.Type == "userId").Value)
            }, "auth");
            return await Task.FromResult(new AuthenticationState(new ClaimsPrincipal(identity)));
        }

        private async Task<string> GetToken()
        {
            return await _localStorageService.GetItemAsync<string>("authToken"); ;
        } 

        private JwtSecurityToken DecodeToken(string token)
        {
            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            return handler.ReadJwtToken(token);
        }
    }
}
