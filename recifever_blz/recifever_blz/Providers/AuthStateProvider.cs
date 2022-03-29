using Microsoft.AspNetCore.Components.Authorization;
using System.Security.Claims;

namespace recifever_blz.Providers
{
    public class AuthStateProvider : AuthenticationStateProvider
    {
        public override async Task<AuthenticationState> GetAuthenticationStateAsync()
        {
            ClaimsIdentity identity = new ClaimsIdentity(new List<Claim>
            {
                new Claim(ClaimTypes.Name, "Rok")
            }, "user");
            return await Task.FromResult(new AuthenticationState(new ClaimsPrincipal(identity)));
        }
    }
}
