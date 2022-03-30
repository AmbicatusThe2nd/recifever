using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.JSInterop;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace recifever_blz.Providers
{
    public class AuthStateProvider : AuthenticationStateProvider
    {
        [Inject]
        public IJSRuntime JSRuntime { get; set; } = null!;

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
            try
            {
                return await JSRuntime.InvokeAsync<string>("localStorage.getItem", "authToken");
            }
            catch
            {
                return string.Empty;
            }
        } 

        private JwtSecurityToken DecodeToken(string token)
        {
            JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
            return handler.ReadJwtToken(token);
        }
    }
}
